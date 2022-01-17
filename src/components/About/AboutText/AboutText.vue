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
@font-face {
  font-family: montserrat;
  src: url(../../../assets/fonts/Montserrat-Medium.ttf);
}

h4,
p {
  text-align: center;
}

h4 {
  font-family: montserrat, monospace;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  letter-spacing: 0.2em;

  font-style: normal;
  font-weight: 600;
  line-height: 44px;

  /* identical to box height */
  letter-spacing: 0.15em;

  color: #cd7308;
  text-transform: uppercase;
}

p {
  font-family: montserrat;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  letter-spacing: 0.1rem;
  font-style: normal;
  font-weight: normal;
  line-height: 29px;

  color: #000000;
}
</style>