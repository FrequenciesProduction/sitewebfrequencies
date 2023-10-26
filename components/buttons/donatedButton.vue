<template>
  <a class="donated--button" href="{{ lien }}" target="blank">
    {{ texte }}
    <span aria-label="ouvre un nouvel onglet"></span>
  </a>
</template>

<script>
export default {
  props: {
    lien: {
      type: String
    },
    texte: {
      type: String
    },
    label: {
      type: String
    },
    btnClass: {
      type: String
    }
  }
  //props: ['texte', 'link']
}
</script>

<style scoped>
@import 'assets/styles/buttons.modules.scss';
</style>