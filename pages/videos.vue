<template>
    <main class="main_box" role="main">
        <h1>Frequencies - Courts Métrages</h1>
        <img src="/img/onde_deco.png" alt="">
        <iframe title="Lecteur intégré youtube pour regarder la vidéo 'Les Chèques et Matt'" width="560" height="315" src="https://www.youtube.com/embed/-yg-KmSC8YM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <img src="/img/onde_deco.png" alt="">
    </main>
</template>

<script setup>
  useHead({
    title: 'Courts Métrages'
  })
</script>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({

})
</script>

<style scoped>
  @import '/assets/styles/videos.modules.scss';
</style>
