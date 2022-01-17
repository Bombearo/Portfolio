<template>
  <div></div>
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
  height: 970px;

  background: url(PFP.png);
  border-radius: 63px;
  background-size: cover;
}
img {
  width: 100%;
}
</style>
