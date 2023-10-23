<template>
  <main class="main_box" role="main">
    <img class="onde" src="/img/onde_deco.png" alt="" />
    <div class="description">
      <img src="/img/qui_sommes_nous_2.png" alt="" />

      <h1>Qui sommes-nous ?</h1>

      <p>
        Une équipe française investie dans la création et la production de fictions
        sonores.<br />
        Une association fondée par Aurélien Bernadas, qui s’entoure de nombreuses
        personnes bénévoles pour accompagner le projet et le faire grandir.
      </p>

      <h2 class="blue_outline">Qu’est-ce qui nous fait vibrer ?</h2>
      <p>
        Créer une œuvre accessible à tous, peu importe ses difficultés, son handicap, ses
        ressources financières…<br />
        Faire rêver, raconter des histoires, proposer un moment d’évasion.<br />
        Avancer en unissant nos énergies, nos compétences, nos différences, travailler en
        équipe, et être sur la même longueur d’onde
      </p>

      <h2 class="blue_outline">Pourquoi la fiction sonore ?</h2>
      <p>
        Frequencies a choisi l’audio pour soutenir une idée forte: donner accès à tous aux
        fictions sonores et notamment aux personnes atteintes de déficiences visuelles.
      </p>

      <h2 class="blue_outline">Une rencontre essentielle</h2>
      <p>
        Aurélien a eu la chance d’entrer en contact avec Arthur, un jeune homme perdant la
        vue. Il lui dira pour commencer qu’il n’utilise pas l’audiodescription, ça le sort
        de l’histoire… Ça manque de vie !<br />
        Ils passeront deux ans à échanger sur comment faire une belle réalisation,
        proposer une histoire au plus grand nombre et adaptée aux personnes
        malvoyantes.<br />
        <br />
        C’est l’origine du projet !
      </p>
    </div>
    <img class="onde" src="/img/onde_deco.png" alt="" />
  </main>
</template>

<style>
  @import '/assets/styles/description.modules.scss';
</style>

<script setup>
  useHead({
    title: 'Qui sommes-nous ?'
  })
</script>
<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  
});
</script>
