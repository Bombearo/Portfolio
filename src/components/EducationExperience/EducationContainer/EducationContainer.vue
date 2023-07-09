<template lang="">
  <div class="EducationContainer">
    <h4>Education</h4>
    <EducationItem
      startYear="2021"
      endYear="2025"
      subtext="(Expected)"
      qualification="BSc Computer Science"
      qualInfo="University of Edinburgh"
    />
    <EducationItem
      startYear="2020"
      endYear="2021"
      qualification="Advanced Highers"
      qualInfo="Including As in Computing, Maths"
    />
  </div>
</template>
<script>
import EducationItem from "../EducationItem/EducationItem.vue";
export default {
  name: "EducationContainer",
  components: { EducationItem },
};
</script>
<style>
h4 {
  text-transform: uppercase;
}

.EducationContainer {
  width: 80%;
  margin: auto;
}

@media screen and (max-width: 1024px) {
  .EducationContainer {
    width: 100%;
  }
}
</style>
