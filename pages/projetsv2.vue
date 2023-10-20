<template>
    <main class="main_box" role="main">
        <div class="projects_page">
            <h1>Nos projets</h1>
            <img src="img/onde_deco.png" alt="">
            <div class="projects_box">
                <div class="project" v-for="projet in projetsData">
                    <img :src="projet.image">
                    <div>
                        <h2 :class="projet.cssClass">{{ projet.titre }}</h2>
                        <p>{{ projet.description }}</p>
                    </div>
                    <router-link class="button--blue" :to="{ name: 'emission-show', params: { emissionTitle: projet.tabTitle }}">J'écoute<span aria-label="Réminiscence"></span></router-link>
                </div>
            </div>
            <img src="img/onde_deco.png" alt="">
            <div class="projects_box">
                <div class="project">
                    <img src="img/logo_facebook.jpg">
                    <div>
                        <h2 class="blue_outline">Frequencies</h2>
                        <p>
                            Présentations et extraits des différents projets Frequencies.
                        </p>
                    </div>
                    <router-link class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></router-link>
                </div>
                <div class="project">
                    <img src="img/logo_facebook.jpg">
                    <div>
                        <h2 class="red_outline">Courts Métrages</h2>
                        <p>
                            Accès aux cours métrages de Frequencies sur la chaine Youtube.
                        </p>
                    </div>
                    <router-link class="button--blue" to="/videos">Je regarde<span aria-label="Vidéos Youtube de Frequencies"></span></router-link>
                </div>

            </div>
            <img class="img-bottom" src="img/onde_deco.png" alt="">
        </div>
    </main>
</template>

<script setup>
  useHead({
    title: 'Nos Projets'
  })
</script>
<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
import Parser from 'rss-parser'
let parser = new Parser()
import { emissionsBaseUrl } from '../firebase';

export default defineComponent({
    data() {
        return {
            projetsData: '',
            projetsObj: ''
        }
    },
    mounted() {
        this.getProjets()
    },
    methods: {
        async getProjets() {
            await axios.get(emissionsBaseUrl).then((response) => {
                let obj = response.data
                this.projetsObj = obj
            })
            this.formatProjetsData(this.projetsObj)
        },
        formatProjetsData(projets) {
            this.projetsData = []
            for(const projet in projets) {
                const tabProjetTitle = projets[projet].titre
                const rssProjet = projets[projet].rss
                this.readRssFile(rssProjet, tabProjetTitle)
            }
            console.log(this.projetsData)
        },
        readRssFile(rssUrl, title) {
            axios.get(rssUrl).then((res) => {
                let feedResults = parser.parseString(res.data)
                feedResults.then(feedData => {
                    let titleClass = feedData.image.title == "Réminiscence" ? "black_outline" : "red_outline"
                    let descriptionHttpIndex = feedData.description.indexOf("https")
                    let descriptionText = (feedData.description.indexOf("https") != -1) ? feedData.description.substring(0, descriptionHttpIndex-1) : feedData.description
                    this.projetsData.push({tabTitle: title, titre: feedData.image.title, image: feedData.image.url, description: descriptionText, cssClass: titleClass})
                })
            })
        }
    }
})
</script>

<style scoped>

.img-bottom {
    margin-bottom: 4vw;
}
.projects_page {
    width: 100%;
}
.projects_page img {
    width: 100%;
    object-fit: contain;
}
.projects_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
}

.project {
    border-radius: 8px;
    border: 1px solid black;
    width: 90%;
    height: 14vw;
    margin-bottom: 5vw;
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: center;
}

.project div {
    padding: 1vw;
    margin: auto;
}

.project div p {
    height: 7vw;
    overflow: auto;
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