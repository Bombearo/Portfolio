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

<style scoped>
h4,
p {
  text-align: center;
}

h4 {
  font-family: montserrat, monospace;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);

  line-height: clamp(1.5rem, 2.5vw, 5rem);

  text-transform: uppercase;
}

p {
  font-family: montserrat;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  line-height: min(2rem, 5vw);
}
</style>
