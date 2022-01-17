<template>
  <div>
    <img
      src="https://cdn.discordapp.com/attachments/597175122222252038/924050897745629224/20211218_160545.jpg"
      alt="Profile Picture"
    />
  </div>
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
  position: absolute;
width: 701px;
height: 970px;
left: 628px;
top: 27px;

background: url(PFP.png);
border-radius: 63px;
}
img {
  width: 100%;
}
</style>
