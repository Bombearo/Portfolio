<template>
  <div class="container">
    <AboutText
      v-for="content in aboutDetails"
      :key="content"
      v-bind="content"
    />
  </div>
</template>

<script>
import AboutText from "../AboutText/AboutText.vue";
let about = require("@/assets/api/about.json");
export default {
  name: "TextContainer",
  components: { AboutText },
  data() {
    return {
      aboutDetails: about,
    };
  },
};
</script>

<style scoped>
.container {
  background: #ffffff;
  border: 20px solid #657f56;
  border-radius: 10px;
  padding: 0.1rem 0.6rem;
  width: 100%;
}

@media screen and (max-width: 1440px) and (min-width: 1024px) {
  .container {
    position: absolute;
    width: clamp(30rem, 40vw, 50rem);

    left: clamp(1rem, 2vw, 10rem);
  }
}
</style>
