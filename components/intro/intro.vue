<template>
  <div class="intro">
    <h1 class="h1-title">Frequencies Production</h1>
    <p>
      Création de fictions sonores inspirées pour des personnes malvoyantes à destination
      de tous
    </p>
    <ul class="button-box">
      <li>
        <introButton
            btnClass="button--white"
            label="Ouvre dans un nouvel onglet"
            lien="https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform"
            texte="Devenir bénévole" />
      </li>
      <!-- <li>
        <introButton
            btnClass="button--white"
            label="Ouvre un nouvel onglet"
            lien="/sponsor"
            texte="Devenir sponsor" />
      </li>-->
      <li>
        <introButton
            btnClass="button--white"
            texte="Devenir mécène" />
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
