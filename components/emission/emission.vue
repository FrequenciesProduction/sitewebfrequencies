<template>
  <div class="emission-box">
    <div v-for="emission in emissionsData" class="project">
      <img :src="emission.itemObject.image">
      <div>
        <h2 class="black_outline">{{ emission.itemObject.title }}</h2>
        <p v-if="emission.itemObject.description" v-html="emission.itemObject.description"></p>
        <p v-if="emission.itemObject.acteurs" v-html="emission.itemObject.acteurs"></p>
        <p v-if="emission.itemObject.sounDesigner" v-html="emission.itemObject.sounDesigner"></p>
        <p v-if="emission.itemObject.composition" v-html="emission.itemObject.composition"></p>
        <p v-if="emission.itemObject.mixage" v-html="emission.itemObject.mixage"></p>
        <p v-if="emission.itemObject.podcast" v-html="emission.itemObject.podcast"></p>
        <div style="max-width: 765px; z-index: 1;">
        <div style="left: 0; width: 200%; height: 170px; position: relative;">
          <iframe :src="emission.itemObject.link"
                  allowfullscreen scrolling="no"
                  style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"></iframe>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Parser from 'rss-parser'
import {deleteEmissionUrl, emissionsBaseUrl} from '../../firebase';

let parser = new Parser();

export default {
  setup() {
    const routes = useRoute()
    const name = routes.query.emissionTitle

    return {
      name,
      sourceFile: ''
    }
  },
  data() {
    return {
      emissionsData: ''
    }
  },
  mounted() {
    this.getEmissions()
  },
  methods: {
    async getEmissions() {
      await axios.get(emissionsBaseUrl + '?orderBy="titre"&equalTo="' + this.name + '"').then((response) => {
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
        for (let indice = 0; indice < nbParagraphes; indice++) {
          let start = startingTags[indice],
              end = endingTags[indice],
              contenu = (content.substring(start, end - 4)).trim(),
              testContenu
          if (contenu !== separator) {
            if (this.getNbOccurrences(content, "<a") === 0 && contenu.indexOf("/") !== -1) {
              let urlRegex = new RegExp(/\bhttps?:\/\/[^\s<>"]+/g),
                  urlTabs

              while ((urlTabs = urlRegex.exec(contenu)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (urlTabs.index === urlRegex.lastIndex) {
                  urlRegex.lastIndex++;
                }

                // The result can be accessed through the `m`-variable.
                urlTabs.forEach((match) => {
                  testContenu = contenu.replaceAll(match, '<a href="' + match + '" target="_blank">' + match + '</a>')
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
        if (ulPosition !== -1) {
          let ulLastPosition = content.indexOf("</ul>"),
              contentListeActeurs = content.substring(ulPosition + 5, ulLastPosition),
              listeActeurs = contentListeActeurs.split("<li>");
          for (const idx in listeActeurs) {
            let contentActeurs = listeActeurs[idx].trim()
            if (contentActeurs !== "") {
              let replacedContentActeurs = contentActeurs.replace("</li>", ""),
                  rolesTab = replacedContentActeurs.split(":"),
                  roleName = rolesTab[0].trim(),
                  roleValue = rolesTab[1].trim();
              switch (roleName) {
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
      return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
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
      while (regexStartingTag.exec(string)) {
        resultsStartingTags.push(regexStartingTag.lastIndex)
      }
      while (regexEndingTag.exec(string)) {
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

<style>
@import './emission.modules.scss';
</style>