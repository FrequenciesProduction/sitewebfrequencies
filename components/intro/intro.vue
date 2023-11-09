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
            btnClass="intro--button"
            label="Aller à la page devenir bénévole"
            lien="https://docs.google.com/forms/d/e/1FAIpQLSc9T5X5v1Ydinnh5OY0PR2RWsXEp_Ac5zkPIKZrpblGRT2S4g/viewform"
            texte="Devenir bénévole" />
      </li>

      <!-- <li>
        <introButton
            btnClass="intro--button"
            label="Aller à la page devenir sponsor"
            lien="/sponsor"
            texte="Devenir sponsor" />
      </li>-->
      <!--
      <li>
        <introButton
            btnClass="intro--button"
            label="Aller à la page devenir mécène"
            lien="/mécène"
            texte="Devenir mécène" />
      </li>
      -->
    </ul>
  </div>
</template>

<style>
  @import './intro.modules.scss';
</style>

<script setup>
import introButton from '~/components/buttons/introButton.vue'
</script>
