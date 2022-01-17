<template>
  <div class="container">
    <AboutText
      title="About Me"
      subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing massa est sit. Dictum eu turpis enim ullamcorper rutrum euismod. Nisi, commodo netus sed rhoncus amet. Porttitor tincidunt nunc magna blandit ullamcorper."
    />
    <AboutText
      title="Tutoring"
      subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing massa est sit. Dictum eu turpis enim ullamcorper rutrum euismod. Nisi, commodo netus sed rhoncus amet. Porttitor tincidunt nunc magna blandit ullamcorper."
    />
  </div>
</template>

<script>
import AboutText from "../AboutText/AboutText.vue";
export default {
  name: "TextContainer",
  components: { AboutText },
};
</script>

<style scoped>
.container {
  background: #ffffff;
  border: 20px solid #657f56;
  border-radius: 10px;
  padding: 1rem;
}
</style>