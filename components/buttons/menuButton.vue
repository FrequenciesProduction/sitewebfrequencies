<template>
    <a href="{{ link }}" class="button--white">
        {{ texte }}
    </a>
</template>

<script>
    export default {
        props: ['texte', 'link']
    }
</script>

<style scoped>
    @import '/assets/styles/buttons.modules.scss';
</style>