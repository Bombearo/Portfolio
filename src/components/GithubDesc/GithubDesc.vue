<template>
  <div>
    <SectionContainer :alignedRight="true">
      <template v-slot:content>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim labore
        eveniet quam repellat cupiditate a illum, doloribus, corrupti
        consectetur, hic commodi? Pariatur consectetur cumque porro saepe iste
        cupiditate minima voluptatum.</template
      >
      <template v-slot:media> <GithubAbout /> </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../SectionContainer/SectionContainer.vue";
import GithubAbout from "../GithubAbout/GithubAbout.vue";

export default {
  name: "GithubDesc",
  components: { SectionContainer, GithubAbout },
};
</script>

<style lang="scss" scoped>
</style>