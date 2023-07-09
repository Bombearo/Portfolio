<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ExperienceText",
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
h4 {
  font-family: montserrat-semiBold;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  line-height: clamp(1.5rem, 2.5vw, 5rem);

  /* identical to box height */
  text-align: left;
  letter-spacing: 0.15em;

  text-transform: uppercase;
  margin: 0.75em 0 0 0;
}
p {
  font-family: montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(1.25rem, 1.5vw, 1.75rem);
  line-height: min(2rem, 5vw);
  display: flex;
  align-items: center;

  color: #000000;
}
</style>
