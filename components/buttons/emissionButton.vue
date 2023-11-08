<template>
  <button class='emission--button'>
        {{ texte }} 
        <span :aria-label="label"></span>
    </button>
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