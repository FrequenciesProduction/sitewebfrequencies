<template>
    <a class="button--white" target="_blank">
        {{ texte }}
    </a>
</template>

<script>
    export default {
        props: ['texte']
    }
</script>

<style scoped>
    @import '/assets/styles/buttons.modules.scss';
</style>