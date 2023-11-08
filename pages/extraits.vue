<template>
    <main class="main_box" role="main">
        <h1>Les projets Frequencies</h1>

        <div class="instructions_box">
        <Instructions></Instructions>
        </div>

        <h2 class="blue_outline">Les Séries Audio</h2>

        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Les Chroniques Sombres'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/62MGPwuCETyoVTubkQwyl1?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(1)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description de l'épisode 1"></span></button>
        <p v-show="w1" class="text--resume">
            Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l'aventure d'un archiviste en quête de réponses...<br>
            Pour entendre la suite de leur archives, rechercher "Les Chroniques Sombres" de "Frequencies" ou par flux rss "https://anchor.fm/s/5b4caa58/podcast/rss"<br>
            "Les Chroniques Sombres" est un spin off de la fiction sonore "Réminiscence"<br>
            https://www.podpage.com/reminiscence-1/follow/<br>
            Flux rss : https://anchor.fm/s/29441e74/podcast/rss<br>
        </p>
        </div>

        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Réminiscence'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/43hgtjeKGioHzCCVvw9kTF?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div class="box--resume">
        <button @click="toggleText(2)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description de l'épisode 1"></span></button>
        <p v-show="w2" class="text--resume">
            Série française de science-fiction dramatique.<br>
            L'aventure d'un homme se mourant dans le désert, dont le passé lui revient en mémoire et va nous raconter son histoire.<br>
            Pour entendre la suite de son histoire, rechercher "Réminiscence" de "Frequencies" ou par flux rss "https://anchor.fm/s/29441e74/podcast/rss"<br>
        </p>
        </div>

        <h2 class="blue_outline">Les Histoires Courtes</h2>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/7wjCbzIpdGPuwGCdlNTa86?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'extrait de 'Echo - Histoires Courtes'" width="90%"></iframe>
        <div class="box--resume">
        <button @click="toggleText(3)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description de l'épisode 1"></span></button>
        <p v-show="w3" class="text--resume">
            Après la victoire de la France au Mondial, Gabrielle et Sliman partent rejoindre les parents de celle-ci, dans une aventure pas comme les autres....<br>
            Il s'agit de la version audio de "Les chèques & Matt" qui a été réalisé durant le 48H Film Project, vous pourrez retrouver la version vidéo sur Youtube à "Echo" ou à "https://www.youtu.be/xYKpDSc67q0"<br>
        </p>
        </div>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/03c7GJTCzP6jdLoQ4nghet?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'extrait de 'Les Chèques & Matt - Histoires Courtes'" width="90%"></iframe>
        <div class="box--resume">
        <button @click="toggleText(4)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description de l'épisode 1"></span></button>
        <p v-show="w4" class="text--resume">
            Alors qu'ils attendent un heureux événement, Florian et sa petite-amie doivent faire face à une grave impasse financière...<br>
            Il s'agit de la version de "Les chèques & Matt" qui a été réalisé durant le 48H Film Project, vous pourrez retrouver la version vidéo sur Youtube à "Les chèques & Matt" ou à "https://www.youtube.com/watch?v=-yg-KmSC8YM"<br>
        </p>
        </div>

    </main>
</template>

<script setup>
  useHead({
    title: 'Extraits des Projets Frequencies'
  })
</script>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    data: () => ({
                    w1: true,
                    w2: true,
                    w3: true,
                    w4: true,
                }),
    methods: {
    toggleText(wich) {
        if (wich == 1)
            this.w1 = !this.w1;
        if (wich == 2)
            this.w2 = !this.w2;
        if (wich == 3)
            this.w3 = !this.w3;
        if (wich == 4)
            this.w4 = !this.w4;
    }
    }
})
</script>

<style scoped>
  @import '/assets/styles/extraits.modules.scss';
</style>
