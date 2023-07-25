<template>
    <div class="test">
        <Nav></Nav>
        <Nuxt />
        <Footer></Footer>
    </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: clamp(15px, 2vw, 20px);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

ul > li {
  display: inline-block;
}

.main_box {
  min-height: 10vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 10vw;
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #c23636;
  color: #c23636;
  background-color: #fff;
  text-decoration: none;
  padding: 1vw 2vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
}

.button--white:hover {
    text-decoration: underline;
    color: #c23636;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #c23636;
  color: #fff;
  background-color: #c23636;
  text-decoration: none;
  padding: 1vw 2vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
}

.button--blue:hover {
    text-decoration: underline;
    color: #fff;
}

.button--resume {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #c23636;
  color: #fff;
  background-color: #c23636;
  text-decoration: none;
  padding: 0.5vw 1vw;
  margin-left: 0vw;
  margin-right: 0vw;
  margin-top: 0vw;
  margin-bottom: 0.5vw;
  font-size: small;
}

.button--resume:hover {
    text-decoration: underline;
    color: #fff;
}

.box--resume {
  width: 90%;
  display: flex;
  flex-direction: column;
  font-size: small;
  margin-bottom: 3vw;
}

.text--resume {
  border-radius: 4px;
  border: 1px solid #c23636;
  text-align: left;
  padding: 1vw;
}

h1 {
    margin-bottom: 4vw;
}
</style>