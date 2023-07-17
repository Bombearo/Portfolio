<template>
  <div>
    <h4>Contact Me</h4>
    <div class="email">
      <h3>shekjaden@gmail.com</h3>
    </div>
    <p>or you can find me on</p>

    <div class="other-social">
      <div
        v-for="socialItem in socialItems"
        :key="socialItem.path"
        class="flex-item"
      >
        <SocialItem :svgPath="socialItem.path" :altText="socialItem.alt" />
      </div>
    </div>
  </div>
</template>
<script>
import SocialItem from "./SocialItem.vue";

let items = [];
items.push({
  path: require(`@/assets/SVGs/Discord_black.svg`),
  alt: "Discord Icon",
});
items.push({
  path: require(`@/assets/SVGs/LinkedIN_black.svg`),
  alt: "LinkedIn Icon",
});
items.push({
  path: require(`@/assets/SVGs/Medium_black.svg`),
  alt: "Medium Icon",
});

export default {
  name: "ContactContainer",
  components: { SocialItem },
  data() {
    return {
      socialItems: items,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
<style scoped>
div {
  background-color: #657f56;
  padding: max(1rem, 2vh);
  height: 100%;
}

h4,
p {
  color: #b3cca3;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  font-family: montserrat-semiBold;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(0.9rem, 0.818181818182rem + 0.30303030303vw, 1rem);
  line-height: 44px;

  /* identical to box height */
  text-align: center;
  letter-spacing: 0.15em;

  color: #d7ecc9;
}

.other-social {
  display: flex;
  margin: auto;
  align-items: left;
  max-width: 350px;
}

.flex-item {
  width: clamp(60px, 30%, 100px);
  padding: 0;
  margin: auto;
}

.flex-item img {
  width: clamp(60px, 2vw, 80px);
}
</style>
