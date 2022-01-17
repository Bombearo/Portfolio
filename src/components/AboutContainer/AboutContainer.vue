<template>
  <div>
    <SectionContainer>
      <template v-slot:content>
        <div class="about-desc">
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem assumenda quis voluptatibus quae? Quisquam, ea
            nesciunt! Repudiandae, minus! Dignissimos ipsum vero, velit
            provident voluptatem neque doloribus labore quo facilis totam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur,
            tenetur, illum commodi iusto assumenda nam totam, doloremque quam
            nemo possimus nobis ut aliquid blanditiis ea alias? Incidunt,
            tempore. Harum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil quidem vitae ullam et distinctio adipisci qui harum hic,
            reiciendis, ex beatae, laborum consequatur necessitatibus
            doloremque? Exercitationem laboriosam doloribus iusto magnam!
          </p>
        </div>
      </template>
      <template v-slot:media>
        <AboutImage src="../../assets/temp/PFP.jpg" />
      </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../SectionContainer/SectionContainer.vue";
import AboutImage from "../AboutImage/AboutImage.vue";

export default {
  name: "AboutContainer",
  components: { SectionContainer, AboutImage },
};
</script>

<style scoped>
@font-face {
  font-family: montserrat;
  src: url(../../assets/fonts/Montserrat-Medium.ttf);
}

h4 {
  font-family: montserrat, monospace;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
}

p {
  font-family: montserrat;
  font-size: 1rem;
  letter-spacing: 0.1rem;
}
</style>
