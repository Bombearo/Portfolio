<template>
  <div><img src="./PFP.jpg" alt="" /></div>
</template>

<script>
export default {
  name: "AboutImage",
  props: {
    src: {
      type: String,
    },
  },
  methods: {
    getURL() {
      console.log(this.src);
      return require(this.src);
    },
  },
};
</script>

<style scoped>
div {
  overflow: hidden;
  width: 701px;
  border-radius: 63px;
  background-size: cover;
  position: relative;
  z-index: -1;
  right: clamp(3rem, 5.5vw, 15rem);
}
img {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  div {
    width: 100%;
    height: 100%;
  }
}
</style>
