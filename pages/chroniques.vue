<template>
    <main class="main_box" role="main">
        <h1>Les Chroniques Sombres</h1>

        <div class="instructions_box">
        <Instructions></Instructions>
        </div>

        <h2>Le dernier épisode</h2>
        <iframe title="Lecteur intégré spotify pour écouter l'épisode 1 des chroniques sombres" style="border-radius:12px" src="https://open.spotify.com/embed/episode/3DE1RjQwxdgrsO4WgLEMiw?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    
        <h2>Tous les épisodes</h2>
        <iframe title="Lecteur intégré spotify pour écouter l'épisode 1 des chroniques sombres" style="border-radius:12px" src="https://open.spotify.com/embed/episode/3DE1RjQwxdgrsO4WgLEMiw?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    
    </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Les Chroniques Sombres"
        };
    }
})
</script>

<style scoped>
.instructions_box {
    width: 100%;
}

iframe {
    margin-bottom: 1vw;
}
</style>