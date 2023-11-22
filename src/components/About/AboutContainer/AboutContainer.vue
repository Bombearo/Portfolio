<template>
  <div class="AboutSection">
    <SectionContainer>
      <template v-slot:content>
        <TextContainer> </TextContainer>
      </template>
      <template v-slot:media>
        <AboutImage :src="src" />
      </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../../SectionContainer/SectionContainer.vue";
import AboutImage from "../AboutImage/AboutImage.vue";
import TextContainer from "../TextContainer/TextContainer.vue";

export default {
  name: "AboutContainer",
  components: { SectionContainer, AboutImage, TextContainer },
  data() {
    return {
      src: require("@/assets/images/PFP.jpg"),
    };
  },
};
</script>

<style scoped>
.AboutSection {
  position: relative;
  background: linear-gradient(#fff, #d7ecc9);
  background: -moz-linear-gradient(top, #fff, #d7ecc9);
  z-index: -3;
  width: 100%;
  padding-bottom: 1rem;
}
</style>
