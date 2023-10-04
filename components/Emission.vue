<template>
    <div class="projects_box">
        <div class="project" v-for="emission in emissionsData">
            <img :src="emission.itemObject.image">
            <div>
                <h2 class="black_outline">{{ emission.itemObject.title }}</h2>
                <p>{{ emission.itemObject.description }}</p>
                <p>{{ emission.itemObject.acteurs }}</p>
                <p>{{ emission.itemObject.sounDesigner }}</p>
                <p>{{ emission.itemObject.composition }}</p>
                <p>{{ emission.itemObject.mixage }}</p>
                <p>{{ emission.itemObject.podcast }}</p>
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
    import { ref, deleteObject, getDownloadURL } from 'firebase/storage';

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
                    let obj = response.data
                    let objKey = Object.keys(obj)[0]
                    let sourceValue = obj[objKey].rss
                    this.sourceFile = sourceValue
                })
                // let fichierSource = ref(storage, this.sourceFile);
                // const url = await getDownloadURL(fichierSource);      
                // https://anchor.fm/s/29441e74/podcast/rss | reminiscence
                // https://anchor.fm/s/5b4caa58/podcast/rss | chroniques          
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
                let items = feedData.items
                let separator = "----------------------------------------------------------------------";
                let headerPodcastLink = "https://anchor.fm/" + this.name + "/embed/episodes/"
                let credits
                items.forEach((itemObject) => {
                    let testSeparator
                    let content = itemObject.content
                    let idxSeparator = content.indexOf(separator)
                    let premierePartie = content.substring(0, idxSeparator -1)
                    let secondePartieTemp = (content.substring(idxSeparator + separator.length +1)).trim()
                    let idxPodcast = secondePartieTemp.indexOf("---")
                    let secondePartie = (secondePartieTemp.substring(0, idxPodcast)).replaceAll(/\u00A0/gi, " ")
                    let troisiemePartieTemp =  secondePartieTemp.substring(idxPodcast + 1)
                    let troisiemePartie = troisiemePartieTemp.replace("-- ","")
                    testSeparator = secondePartie.indexOf("    ")
                    if(testSeparator !== -1) {
                        credits = secondePartie.split("    ")
                    } else if(secondePartie.indexOf("   ") !== -1) {
                        credits = secondePartie.split("   ")
                    } else if(secondePartie.indexOf("  ") !== -1) {
                        credits = secondePartie.split("  ")
                    } 
                   
                    let acteurs = credits[0];
                    let sounDesigner = credits[1];
                    let composition = credits[2];
                    let mixage = credits[3];
                    let image = itemObject.itunes.image;
                    let podcastUrl = itemObject.link
                    let podTab = podcastUrl.split("/");
                    itemObject.link = headerPodcastLink + podTab[7]
                    itemObject.description = premierePartie
                    itemObject.acteurs = acteurs
                    itemObject.sounDesigner = sounDesigner
                    itemObject.composition = composition
                    itemObject.image = image
                    itemObject.mixage = mixage
                    itemObject.podcast = troisiemePartie
                    this.emissionsData.push({itemObject})
                })
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