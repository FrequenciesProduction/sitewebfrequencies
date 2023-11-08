<template>
  <Header></Header>
  <slot />
  <Footer></Footer>
</template>

<style>
  @import './default.modules.scss';
</style>

<script>
export default {
  created() {
    if(process.client) {
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      let header = document.getElementById('header')
      let sticky = header.offsetTop

      window.scrollY > sticky ? header.classList.add("sticky") : header.classList.remove("sticky")
    }
  }
}
</script>