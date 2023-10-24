<template>
  <main class="main_box" role="main">
    <Intro/>
    <img src="/img/onde_deco.png" alt="">
    <h2 class="section_title">Découvrir les derniers projets de Frequencies</h2>
    <ProjectsMini/>
    <img src="/img/onde_deco.png" alt="">
    <Description/>
    <img src="/img/onde_deco.png" alt="">
  </main>
</template>

<style scoped>
.main_box {
  padding-top: 0vw;
}
</style>

<script setup>
import ProjectsMini from '~/components/projectsMIni/projectsMini.vue';
  useHead({
    title: 'Frequencies'
  })
</script>

<style scoped>
h2 {
  margin-bottom: 3vw;
}

img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 4vw;
}
</style>
