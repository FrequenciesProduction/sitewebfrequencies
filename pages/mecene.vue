<template>
    <main class="main-box" role="main">
        <Mecene/>
    </main>
</template>

<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    setup() {

    },
    head() {
        return {
            title: "Frequencies"
        };
    }
})
</script>

<style>
  @import '/assets/styles/mecene.modules.scss';
</style>
