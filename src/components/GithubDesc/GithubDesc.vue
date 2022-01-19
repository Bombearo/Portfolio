<template>
  <div>
    <SectionContainer :alignedRight="true">
      <template v-slot:content>
        <div class="desc">
          <h4>Github</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            labore eveniet quam repellat cupiditate a illum, doloribus, corrupti
            consectetur, hic commodi? Pariatur consectetur cumque porro saepe
            iste cupiditate minima voluptatum.
          </p>
        </div>
      </template>
      <template v-slot:media> <GithubAbout /> </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from '../SectionContainer/SectionContainer.vue';
import GithubAbout from '../GithubAbout/GithubAbout.vue';

export default {
  name: 'GithubDesc',
  components: { SectionContainer, GithubAbout }
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
