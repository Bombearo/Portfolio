<template>
  <SectionContainer :content-width="40" align-center="flex-start">
    <template v-slot:content>
      <EducationContainer />
    </template>
    <template v-slot:media>
      <WorkContainer />
    </template>
  </SectionContainer>
</template>
<script>
import SectionContainer from "../SectionContainer/SectionContainer.vue";
import WorkContainer from "./WorkContainer/WorkContainer.vue";
import EducationContainer from "./EducationContainer/EducationContainer.vue";
export default {
  name: "EducationExperienceContainer",
  components: { WorkContainer, EducationContainer, SectionContainer },
};
</script>
<style>
h4 {
  margin: 0;
}
</style>
