<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ subtext }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutText",
  props: {
    title: String,
    subtext: String,
  },
};
</script>

<style scoped></style>
