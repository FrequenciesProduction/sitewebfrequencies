<template>
  <main class="main_box" role="main">
    <Intro/>
    
    <h2>Découvrir les derniers projets de Frequencies</h2>
    <div class="projects_box">

      <div class="project">
      <img src="/logo_facebook.jpg">
      <h3>Frequencies</h3>
      <p>
        Présentations et extraits des différents projets frequencies.
      </p>
      <NuxtLink class="button--blue" to="/extraits">J'écoute<span aria-label="Vidéos Youtube de Frequencies"></span></NuxtLink>
    </div>


    <div class="project">
      <img src="/reminiscences.png">
      <h3>Réminiscence</h3>
      <p>
        L’aventure d’un homme se mourant dans le désert, dont le passé lui revient en mémoire il va nous raconter son histoire.
        Installez-vous confortablement, et laissez-vous emporter dans ce récit intemporel.
        Ferez-vous partie de ceux qui écouteront son histoire ?
      </p>
      <NuxtLink class="button--blue" to="/reminiscence">J'écoute<span aria-label="Réminiscence"></span></NuxtLink>
    </div>

    <div class="project">
      <img src="/chroniques_sombres.png">
      <h3>Les Chroniques Sombres</h3>
      <p>
        Dans un univers où les légendes urbaines ne sont plus réduites au rang de folklore, venez suivre l’aventure d’un archiviste en quête de réponse…
        Et n’oubliez pas peu importe que vous y croyez ou non, cela ne cessera pas d’exister pour autant…
      </p>
      <NuxtLink class="button--blue" to="/chroniques">J'écoute<span aria-label="Les Chroniques Sombres"></span></NuxtLink>
    </div>

  </div>
  
  <Description/>
  </main>
</template>

<style scoped>
.main_box {
  padding-top: 0vw;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    head() {
        return {
            title: "Frequencies"
        };
    }
})
</script>

<style scoped>
.projects_box {
    display: flex;
    justify-content: space-evenly;
}
.project {
    border-radius: 8px;
    border: 1px solid black;
    width: 28%;
    margin-bottom: 5vw;
    overflow: hidden;
}

.project img {
    width: 30%;
    object-fit: contain;
}
</style>
