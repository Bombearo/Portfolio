<template>
  <div id="WelcomeContainer">
    <img
      class="backgroundImage"
      :src="backgroundImg"
      alt="Background Image appears here"
    />
    <WelcomeText />
  </div>
</template>
<script>
import WelcomeText from "./WelcomeText/WelcomeText.vue";

let svgPath = require(`@/assets/SVGs/HTML.svg`);
let backgroundImg = require(`@/assets/images/WelcomeBackground.png`);
export default {
  name: "WelcomeContainer",
  components: {
    WelcomeText,
  },
  data() {
    return {
      svgPath: svgPath,
      backgroundImg: backgroundImg,
    };
  },
};
</script>
<style>
#WelcomeContainer {
  min-height: 100vh;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  object-fit: cover;
  position: relative;
}

.backgroundImage {
  opacity: 0.6;
  min-width: 1440px;
}

@media screen and (max-width: 900px) {
  #WelcomeContainer {
    min-height: 90vh;
  }

  .backgroundImage {
    min-width: 1024px;
  }
}
</style>
