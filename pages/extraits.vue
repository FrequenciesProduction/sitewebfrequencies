<template>
    <main class="main_box" role="main">
        <h1>Les projets Frequencies</h1>

        <div class="instructions_box">
        <Instructions></Instructions>
        </div>

        <h2>Les Séries Audio</h2>
        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Les Chroniques Sombres'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/62MGPwuCETyoVTubkQwyl1?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Réminiscence'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/43hgtjeKGioHzCCVvw9kTF?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


        <h2>Les Histoires Courtes</h2>
        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Echo - Histoires Courtes'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/7wjCbzIpdGPuwGCdlNTa86?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe title="Lecteur intégré spotify pour écouter l'extrait de 'Les Chèques & Matt - Histoires Courtes'" style="border-radius:12px" src="https://open.spotify.com/embed/episode/03c7GJTCzP6jdLoQ4nghet?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


    </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Extraits des Projets Frequencies"
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