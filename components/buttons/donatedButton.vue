<template>
  <a class="donated--button" :aria-label="label" :href="lien" target="_blank">
    {{ texte }}
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
}
</script>

<style scoped>
  @import 'assets/styles/buttons.modules.scss';
</style>