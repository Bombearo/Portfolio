<template>
  <div class="experience">
    <education-container />
  </div>
</template>

<script>
import EducationContainer from "../EducationContainer/EducationContainer.vue";
export default {
  name: "ExperienceContainer",
  components: { EducationContainer },
};
</script>

<style scoped>
.experience {
  display: flex;
}
.experience > div {
  width: 60%;
}
</style>
