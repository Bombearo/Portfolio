<template>
  <div><img :src="src" alt="" /></div>
</template>

<script>
export default {
  name: "AboutImage",
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  overflow: hidden;
  width: clamp(10em, 40vw, 701px);
  border-radius: 63px;
  background-size: cover;
  position: relative;
  z-index: -1;
}
img {
  width: 100%;
  margin: 0;
}
@media screen and (max-width: 1024px) {
  div {
    width: 100%;
    height: 100%;
  }
}
</style>
