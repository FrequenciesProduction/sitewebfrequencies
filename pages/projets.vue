<template>
    <main class="main_box" role="main">
        
        <div class="projects_page">
            
            <h1>Nos projets</h1>
            <img src="/onde_deco.png" alt="">

            <div class="projects_box">

                <div class="project">
                    <img src="/reminiscences.png">
                    <div>
                        <h2 class="black_outline">Réminiscence</h2>
                        <p>
                            L’aventure d’un homme se mourant dans le désert, dont le passé lui revient en mémoire il va nous raconter son histoire.
                            Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
                            Ferez-vous partie de ceux qui écouteront son histoire ?
                        </p>
                    </div>
                    <!-- <NuxtLink class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></NuxtLink> -->
                    <nuxt-link class="button--blue" :to="{ name: 'emission-show', params: { emissionTitle: 'reminiscence' }}">J'écoute<span aria-label="Réminiscence"></span></nuxt-link>
                </div>

                <div class="project">
                    <img src="/chroniques_sombres.png">
                    <div>
                        <h2 class="red_outline">Les Chroniques Sombres</h2>
                        <p>
                            Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l’aventure d’un archiviste en quête de réponse…
                            Et n’oubliez pas peu importe que vous y croyez ou non, cela ne cessera pas d’exister pour autant…
                        </p>
                    </div>
                    <!-- <NuxtLink class="button--blue" to="/chroniques">J'écoute<span aria-label="Les Chroniques Sombres"></span></NuxtLink> -->
                    <nuxt-link class="button--blue" :to="{ name: 'emission-show', params: { emissionTitle: 'les-chroniques-sombres' }}">J'écoute<span aria-label="Les Chroniques Sombres"></span></nuxt-link>
                </div>

                <div class="project">
                    <img src="/logo_facebook.jpg">
                    <div>
                        <h2 class="blue_outline">Frequencies</h2>
                        <p>
                            Présentations et extraits des différents projets Frequencies.
                        </p>
                    </div>
                    <NuxtLink class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></NuxtLink>
                    <!-- <nuxt-link class="button--blue" :to="{ name: 'emission-show', params: { emissionTitle: 'extraits' }}">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></nuxt-link> -->
                </div>

            </div>

            <img src="/onde_deco.png" alt="">

            <div class="projects_box">

                <div class="project">
                    <img src="/logo_facebook.jpg">
                    <div>
                        <h2 class="red_outline">Courts Métrages</h2>
                        <p>
                            Accès aux cours métrages de Frequencies sur la chaine Youtube.
                        </p>
                    </div>
                    <NuxtLink class="button--blue" to="/videos">Je regarde<span aria-label="Vidéos Youtube de Frequencies"></span></NuxtLink>
                </div>

            </div>

            <img class="img-bottom" src="/onde_deco.png" alt="">

        </div>

    </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Nos Projets"
        };
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