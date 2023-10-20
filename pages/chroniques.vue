<template>
    <main class="main_box" role="main">
        <h1>Les Chroniques Sombres</h1>

        <div class="instructions_box">
        <Instructions></Instructions>
        </div>

        <h2 class="black_outline">Description</h2>
        <div class="desc-outline">
            L'archiviste et Lance enquêtent sur un cas d'âme blanche. Oserez-vous lancer l'enregistrement ?
            <br><br>
            ----------------------------------------------------------------------
            <br><br>
            Acteur : David Borens / Fred Mafra<br>
            Sound désigner : José Toutain<br>
            Composition : Sophian Alkurdi<br>
            Mixage / Mastering : Adrien Halfon<br>
        </div>
        <h2 class="red_outline">Le dernier épisode</h2>

        <iframe title="Lecteur intégré spotify pour écouter l'épisode 1 des chroniques sombres" style="border-radius:12px" src="https://open.spotify.com/embed/episode/3DE1RjQwxdgrsO4WgLEMiw?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <!-- <div class="box--resume">
        <button @click="toggleText(0)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description du dernier épisode publié"></span></button>
        </div> -->

        <h2 class="red_outline">Tous les épisodes</h2>

      <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" frameBorder="0" height="152" loading="lazy" src="https://open.spotify.com/embed/episode/3DE1RjQwxdgrsO4WgLEMiw?utm_source=generator&theme=0" style="border-radius:12px" title="Lecteur intégré spotify pour écouter l'épisode 1 des chroniques sombres" width="90%"></iframe>
        <!-- <div class="box--resume">
        <button @click="toggleText(1)" class="button--resume">Description de l'épisode<span aria-label="montre ou cache la description de l'épisode 1"></span></button>
        </div> -->

    </main>
</template>

<script setup>
  useHead({
    title: 'Les Chroniques Sombres'
  })
</script>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    data: () => ({
                    last: true,
                    one: false,
                }),
    methods: {
    toggleText(wich) {
        if (wich == 0)
            this.last = !this.last;
        if (wich == 1)
            this.one = !this.one;
    }
    }
})
</script>

<style>
    @import '/assets/styles/chroniques.modules.scss';
</style>
