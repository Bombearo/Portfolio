<template>
  <div>
    <h2>Education</h2>
    <education-item v-for="item in getEducation()" :key="item" v-bind="item" />
  </div>
</template>

<script>
import EducationItem from "../EducationItem/EducationItem.vue";
export default {
  name: "EducationContainer",
  methods: {
    getEducation() {
      return [
        {
          dateRange: "2021-2025 (Expected)",
          qualification: "BSc Computer Science",
          subText: "University of Edinburgh",
        },
        {
          dateRange: "2021-2025 (Expected)",
          qualification: "BSc Computer Science",
          subText: "University of Edinburgh",
        },
        {
          dateRange: "2021-2025 (Expected)",
          qualification: "BSc Computer Science",
          subText: "University of Edinburgh",
        },
        {
          dateRange: "2021-2025 (Expected)",
          qualification: "BSc Computer Science",
          subText: "University of Edinburgh",
        },
      ];
    },
  },
  components: { EducationItem },
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}
</style>
