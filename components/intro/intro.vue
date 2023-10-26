<template>
  <div class="intro">
    <h1 class="h1-title">Frequencies Production</h1>
    <p>
      Création de fictions sonores inspirées pour des personnes malvoyantes à destination
      de tous
    </p>
    <ul class="button-box">
      <li>
        <introButton :lien="'https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform'"
                     texte="Devenir sponsor" />
        <!-- <a class="button--white" href="https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform">
          Devenir bénévole
          <span aria-label="Ouvre un nouvel onglet"></span>
        </a>-->
      </li>
      <li>
        <introButton texte="Devenir sponsor"/>
      </li>
      <li>
        <introButton texte="Devenir mécène"/>
      </li>
    </ul>
  </div>
</template>

<style>
  @import './intro.modules.scss';
</style>

<script setup>
import introButton from '~/components/buttons/introButton.vue'
</script>