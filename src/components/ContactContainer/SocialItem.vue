<template>
  <img :src="svgPath" :alt="altText" />
</template>
<script>
export default {
  name: "SocialItem",
  props: {
    svgPath: { type: String },
    altText: { type: String },
  },
};
</script>
<style lang=""></style>
