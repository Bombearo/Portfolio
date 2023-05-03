<template>
  <div class="AboutSection">
    <SectionContainer>
      <template v-slot:content>
          <TextContainer> </TextContainer>
      </template>
      <template v-slot:media>
          <AboutImage src="../../assets/temp/PFP.jpg" />
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
