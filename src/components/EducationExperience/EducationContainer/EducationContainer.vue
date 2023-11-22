<template lang="">
  <div class="EducationContainer">
    <h4>Education</h4>
    <EducationItem v-for="item in education" :key="item" v-bind="item" />
  </div>
</template>
<script>
import EducationItem from "../EducationItem/EducationItem.vue";

let educationData = require("@/assets/api/education.json");

export default {
  name: "EducationContainer",
  components: { EducationItem },
  data() {
    return {
      education: educationData,
    };
  },
};
</script>
<style>
h4 {
  text-transform: uppercase;
}

.EducationContainer {
  width: 100%;
  margin: 0;
}
</style>
