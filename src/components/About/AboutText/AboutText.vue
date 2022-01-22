<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ subtext }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutText',
  props: {
    title: String,
    subtext: String
  }
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

  line-height: 44px;

  text-transform: uppercase;
}

p {
  font-family: montserrat;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  line-height: 29px;
}
</style>
