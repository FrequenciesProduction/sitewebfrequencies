<template>
    <main class="main_box" role="main">

        <b-container class="projects_page">

            <h1>Nos projets</h1>

            <img src="/onde_deco.png" alt="">

            <div class="projects_box">

                <div class="project" v-for="projet in projetsData">
                    <img :src="projet.image">
                    <div>
                        <h2 :class="projet.cssClass">{{ projet.titre }}</h2>
                        <p>{{ projet.description }}</p>
                    </div>
                    <nuxt-link
                      class="button--blue"
                      :to="{
                             name: 'emission-show',
                             params: { emissionTitle: projet.tabTitle }
                           }"
                    >J'écoute<span aria-label="Réminiscence"></span>
                    </nuxt-link>
                </div>

            </div>

            <img src="/onde_deco.png" alt="">

            <div class="projects_box">

                <div class="project">

                    <div>
                        <h2 class="blue_outline">Frequencies</h2>
                        <p>
                            Présentations et extraits des différents projets Frequencies.
                        </p>
                    </div>

                    <NuxtLink
                      class="button--blue"
                      to="/extraits"
                    >J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span>
                    </NuxtLink>
                    <!-- <nuxt-link class="button--blue" :to="{ name: 'emission-show', params: { emissionTitle: 'extraits' }}">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></nuxt-link> -->
                </div>

                <div class="project">
                  <img src="/reminiscences.png">

                  <div>
                    <h2 class="black_outline">Réminiscence</h2>
                    <p>
                      L’aventure d’un homme se mourant dans le désert,
                      dont le passé lui revient en mémoire il va nous raconter son histoire.
                      Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
                      Ferez-vous partie de ceux qui écouteront son histoire ?
                    </p>
                  </div>
                  <!-- <NuxtLink class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></NuxtLink> -->
                  <nuxt-link
                    class="button--blue"
                    :to="{
                           name: 'emission-show',
                           params: { emissionTitle: 'reminiscence' }
                         }"
                  >J'écoute<span aria-label="Réminiscence"></span>
                  </nuxt-link>

                </div>

                <div class="project">
                  <img src="/chroniques_sombres.png">

                  <div>
                    <h2 class="red_outline">Les Chroniques Sombres</h2>
                    <p>
                      Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore,
                      venez suivre l’aventure d’un archiviste en quête de réponse…
                      Et n’oubliez pas peu importe que vous y croyez ou non,
                      cela ne cessera pas d’exister pour autant…
                    </p>
                  </div>
                  <!-- <NuxtLink class="button--blue" to="/chroniques">J'écoute<span aria-label="Les Chroniques Sombres"></span></NuxtLink> -->
                  <nuxt-link
                    class="button--blue"
                    :to="{
                          name: 'emission-show',
                          params: { emissionTitle: 'les-chroniques-sombres' }
                         }"
                  >J'écoute<span aria-label="Les Chroniques Sombres"></span>
                  </nuxt-link>

                </div>

                <div class="project">
                    <img src="/logo_facebook.jpg">

                    <div>
                        <h2 class="red_outline">Courts Métrages</h2>
                        <p>
                            Accès aux cours métrages de Frequencies sur la chaine Youtube.
                        </p>
                    </div>

                    <NuxtLink
                      class="button--blue"
                      to="/videos"
                    >Je regarde<span aria-label="Vidéos Youtube de Frequencies"></span>
                    </NuxtLink>

                </div>

            </div>

            <img class="img-bottom" src="/onde_deco.png" alt="">
        </b-container>
    </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'
import {emissionsBaseUrl} from '../../firebase';

let axios = require('axios');
let Parser = require('rss-parser');
let parser = new Parser();

export default defineComponent({
    setup() {

    },
    head() {
        return {
            title: "Nos Projets"
        };
    },
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
        },
        readRssFile(rss, title) {
            axios.get(rss).then((res) => {
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

<style>
@import './projetsv2.modules.scss';
</style>
