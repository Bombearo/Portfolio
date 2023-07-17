<template lang="">
  <div>
    <img :src="svgPath" :alt="altText" />
  </div>
</template>
<script>
export default {
  name: "WelcomeGraphic",
  props: {
    svgPath: {
      type: String,
    },
    altText: {
      type: String,
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
}

@media screen and (max-width: 1024px) {
  div {
    position: absolute;
    overflow: hidden;
    opacity: 30%;
    bottom: 1vh;
  }
}
</style>
