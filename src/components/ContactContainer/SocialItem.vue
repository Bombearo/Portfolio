<template>
  <a :href="href" target="_blank"><img :src="svgPath" :alt="altText" /></a>
</template>
<script>
export default {
  name: "SocialItem",
  props: {
    svgPath: { type: String },
    altText: { type: String },
    href: { type: String },
  },
};
</script>
<style lang=""></style>
