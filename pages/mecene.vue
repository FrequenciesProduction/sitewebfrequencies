<template>
    <main class="main-box" role="main">
        <Mecene/>
    </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

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

<style scoped>
.main_box {
  padding-top: 0vw;
}

h2 {
  margin-bottom: 3vw;
}

img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 4vw;
}

</style>