<template>
  <div class="AboutSection">
    <SectionContainer>
      <template v-slot:content>
        <div class="about-desc">
          <TextContainer> </TextContainer>
        </div>
      </template>
      <template v-slot:media>
        <div class="image">
          <AboutImage src="../../assets/temp/PFP.jpg" />
        </div>
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
};
</script>

<style scoped>
.AboutSection {
  position: relative;
}
</style>
