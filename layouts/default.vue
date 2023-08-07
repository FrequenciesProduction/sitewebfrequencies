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
  border: 1px solid black;
  color: #fff;
  background-color: black;
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
  margin-bottom: 1vw;
}

.text--resume {
  border-radius: 4px;
  border: 1px solid black;
  text-align: left;
  padding: 1vw;
}

h1 {
    font-weight: bold;
    font-size: 4vw;
    margin-bottom: 4vw;
}

.red_outline {
  color: black; /* default color if stroke not supported */
  -webkit-text-fill-color: #fff; /* Will override color if stroke is supported */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #c23636;
}

.blue_outline {
  color: black; /* default color if stroke not supported */
  -webkit-text-fill-color: #fff; /* Will override color if stroke is supported */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #166bba;
}

.black_outline {
  color: black; /* default color if stroke not supported */
  -webkit-text-fill-color: #fff; /* Will override color if stroke is supported */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

.section_title {
  font-style: oblique;
  font-size: 3vw;
}

</style>