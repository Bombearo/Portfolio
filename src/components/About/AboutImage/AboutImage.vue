<template>
  <div class="aboutImage"><img :src="src" alt="" /></div>
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
.aboutImage {
  overflow: hidden;
  width: 40vw;
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
  .aboutImage {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .aboutImage {
    right: 2.5vw;
  }
}
</style>
