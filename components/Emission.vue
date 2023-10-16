<template>
    <div class="projects_box">
        <div class="project" v-for="emission in emissionsData">
            <img :src="emission.itemObject.image">
            <div>
                <h2 class="black_outline">{{ emission.itemObject.title }}</h2>
                <p v-html="emission.itemObject.description" v-if="emission.itemObject.description"></p>
                <p v-html="emission.itemObject.acteurs" v-if="emission.itemObject.acteurs"></p>
                <p v-html="emission.itemObject.sounDesigner" v-if="emission.itemObject.sounDesigner"></p>
                <p v-html="emission.itemObject.composition" v-if="emission.itemObject.composition"></p>
                <p v-html="emission.itemObject.mixage" v-if="emission.itemObject.mixage"></p>
                <p v-html="emission.itemObject.podcast" v-if="emission.itemObject.podcast"></p>
            </div>
            <div style="max-width: 765px;">
                <div style="left: 0; width: 100%; height: 102px; position: relative;">
                    <iframe :src="emission.itemObject.link" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let axios = require('axios');
    let Parser = require('rss-parser');
    let parser = new Parser();
    import { storage, emissionsBaseUrl, deleteEmissionUrl } from '../firebase';

    export default {
        created() {
            const params = this.$route.params
            this.name = params.emissionTitle
        },
        data() {
            return {
                emissionsData: '',
                name: "",
                sourceFile: ""
            }
        },
        mounted() {
            this.getEmissions()
        },
        methods: {
            async getEmissions() {
                await axios.get(emissionsBaseUrl + '?orderBy="titre"&equalTo="'+this.name+'"').then((response) => {
                    let obj = response.data,
                        objKey = Object.keys(obj)[0],
                        sourceValue = obj[objKey].rss
                    this.sourceFile = sourceValue
                })
                // let fichierSource = ref(storage, this.sourceFile);
                // const url = await getDownloadURL(fichierSource); 
                axios.get(this.sourceFile).then((res) => {
                    let feedResults = parser.parseString(res.data)
                    feedResults.then(feedData => {
                        this.formatPostData(feedData);
                    })
                })

            },
            supprimerEmission(emmisionId, rss) {
                // Suppression de l'entrée en base de données
                axios.delete(deleteEmissionUrl + emmisionId + '.json').then((response) => {
                    
                })
                // Suppression du fichier associé sur le stockage cloud de firebase
                // const desertRef = ref(storage, rss);
                // deleteObject(desertRef).then(() => {
                //     window.location.href = '/emissions';
                // }).catch((error) => {
                //     console.log(error)
                // });
            },
            formatPostData(feedData) {
                this.emissionsData = []
                let items = feedData.items,
                    separator = "----------------------------------------------------------------------",
                    headerPodcastLink = "https://anchor.fm/" + this.name + "/embed/episodes/",
                    acteurTitle = "Acteur",
                    designerTitle = "Sound désigner",
                    compositionTitle = "Composition",
                    mixageTitle = "Mixage";
                items.forEach((itemObject) => {
                    let content = this.parseHtmlEntities(itemObject.content),
                        description = "",
                        nbParagraphes = this.getNbOccurrences(content, "<p>"),
                        paragraphes = this.getElementsOccurences(content, "<p>", "</p>"),
                        startingTags = paragraphes["startingTags"],
                        endingTags = paragraphes["endingTags"];
                    for(let indice=0; indice < nbParagraphes; indice++) {
                        let start = startingTags[indice],
                            end = endingTags[indice],
                            contenu = (content.substring(start, end-4)).trim(),
                            testContenu
                        if(contenu !== separator) {
                            if(this.getNbOccurrences(content, "<a") === 0 && contenu.indexOf("/") !== -1) {
                                let urlRegex = new RegExp(/\bhttps?:\/\/[^\s<>"]+/g),
                                    urlTabs

                                while ((urlTabs = urlRegex.exec(contenu)) !== null) {
                                    // This is necessary to avoid infinite loops with zero-width matches
                                    if (urlTabs.index === urlRegex.lastIndex) {
                                        urlRegex.lastIndex++;
                                    }
                                    
                                    // The result can be accessed through the `m`-variable.
                                    urlTabs.forEach((match) => {
                                        testContenu = contenu.replaceAll(match, '<a href="'+match+'" target="_blank">'+match+'</a>')
                                    });
                                }
                                description += testContenu + "<br>"
                            } else {
                                testContenu = contenu
                                description += testContenu + "<br>"
                            }
                        }
                    }
                    let ulPosition = content.indexOf("<ul>")
                    if(ulPosition !== -1) {
                        let ulLastPosition = content.indexOf("</ul>"),
                            contentListeActeurs = content.substring(ulPosition +5, ulLastPosition),
                            listeActeurs = contentListeActeurs.split("<li>");
                        for(const idx in listeActeurs) {
                            let contentActeurs = listeActeurs[idx].trim()
                            if(contentActeurs !== "") {
                                let replacedContentActeurs = contentActeurs.replace("</li>", ""),
                                    rolesTab = replacedContentActeurs.split(":"),
                                    roleName = rolesTab[0].trim(),
                                    roleValue = rolesTab[1].trim();
                                switch(roleName) {
                                    case acteurTitle:
                                        itemObject.acteurs = roleName + ": " + roleValue
                                        break
                                    case designerTitle:
                                    case 'Sound designer':
                                        itemObject.sounDesigner = roleName + ": " + roleValue
                                        break
                                    case compositionTitle:
                                        itemObject.composition = roleName + ": " + roleValue
                                        break
                                    case mixageTitle:
                                        itemObject.mixage = roleName + ": " + roleValue
                                        break
                                }
                            }
                        }
                    }
                    itemObject.description = description
                    let image = itemObject.itunes.image,
                        podcastUrl = itemObject.link,
                        podTab = podcastUrl.split("/");
                    itemObject.image = image
                    itemObject.link = headerPodcastLink + podTab[7]
                    this.emissionsData.push({itemObject})
                })
                
            },
            parseHtmlEntities(str) {
                return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
                    let num = parseInt(numStr, 10);
                    return String.fromCharCode(num);
                });
            },
            getPosition(string, subString, index) {
                return string.split(subString, index).join(subString).length;
            },
            getElementsOccurences(string, startingTag, endingTag) {
                let regexStartingTag = new RegExp(startingTag, 'g'),
                    regexEndingTag = new RegExp(endingTag, 'g'),
                    results = [],
                    resultsStartingTags = [],
                    resultsEndingTags = []
                while(regexStartingTag.exec(string)) {
                    resultsStartingTags.push(regexStartingTag.lastIndex)
                }
                while(regexEndingTag.exec(string)) {
                    resultsEndingTags.push(regexEndingTag.lastIndex)
                }
                results["startingTags"] = resultsStartingTags
                results["endingTags"] = resultsEndingTags
                
                return results

            },
            getNbOccurrences(string, subString, allowOverlapping) {
                string += ""
                subString += ""
                if (subString.length <= 0) {
                    return (string.length + 1)
                }

                let n = 0,
                    pos = 0,
                    step = allowOverlapping ? 1 : subString.length

                while (true) {
                    pos = string.indexOf(subString, pos)
                    if (pos >= 0) {
                        ++n
                        pos += step
                    } else {
                        break
                    }
                }
                return n;
            }
        }
    }
</script>

<style scoped>
.projects_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
}

.project {
    border-radius: .5rem;
    border: .0625rem solid black;
    width: 90%;
    height: fit-content;
    margin-bottom: 5vw;
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: center;
}

.project div {
    padding: 1vw;
    margin: auto;
    width: 100%;
    height: 100%;
}

.project div p {
    height: auto;
    overflow: auto;
    margin-bottom: 0;
    word-break: break-word;
}

.project img {
    width: 20vw;
    object-fit: contain;
    margin-right: 1vw;
}

.project .button--blue {
    text-align: center;
    margin: auto;
    margin-right: 1vw;
}

h2 {
    margin-bottom: 2vw;
    font-size: 3vw;
}
</style>