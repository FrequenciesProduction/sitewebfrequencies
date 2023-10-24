<template>
    <button class='button--blue'>
        {{ texte }} 
        <span aria-label="{{ label }}"></span>
    </button>
</template>

<script>
    export default {
        props: ['texte','label']
    }
</script>

<style scoped>
    @import '/assets/styles/buttons.modules.scss';
</style>