<template>
  <div><img src="./PFP.png" alt="" /></div>
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
