<template>
    <main class="main_box" role="main">
        <h1>Frequencies - Vidéos Youtube</h1>
        <iframe title="Lecteur intégré youtube pour regarder la vidéo 'Les Chèques et Matt'" width="560" height="315" src="https://www.youtube.com/embed/-yg-KmSC8YM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Frequencies - Vidéos Youtube"
        };
    }
})
</script>
