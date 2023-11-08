<template>
  <a class="menu--button" :href="lien">
        {{ texte }}
    <span :aria-label="label"></span>
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