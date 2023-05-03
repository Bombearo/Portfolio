<template>
  <div>
    <h4>Contact Me</h4>
    <div class="email">
      <h3>shekjaden@gmail.com</h3>
    </div>
    <p>or you can find me on</p>

    <div class="other-social">
        <div v-for="socialItem in socialItems" :key="socialItem.path" class="flex-item">
            <SocialItem :svgPath="socialItem.path" :altText="socialItem.alt" />
        </div>
    </div>
  </div>
</template>
<script>
import SocialItem from './SocialItem.vue';

let publicPath = process.env.BASE_URL
let items = [];
items.push({
    path:`${publicPath}SVGs/Discord_black.svg`,
    alt:"Discord Icon"
});
items.push({
    path:`${publicPath}SVGs/LinkedIN_black.svg`,
    alt:"LinkedIn Icon"
});
items.push({
    path:`${publicPath}SVGs/Medium_black.svg`,
    alt:"Medium Icon"
});

export default {
  name: "ContactContainer",
  components:{SocialItem},
  data() {
    return {
      socialItems: items,
      publicPath:process.env.BASE_URL
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
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 44px;

  /* identical to box height */
  text-align: center;
  letter-spacing: 0.15em;

  color: #d7ecc9;
}

.other-social {
  display: flex;
  width: clamp(100px, 30%, 300px);
  margin: auto;
  align-items: left;
}

.flex-item {
  width: clamp(10px, 30%, 60px);
  padding: 0;
  margin: auto;
}

.flex-item img {
  width: min(60px, 5vw);
}
</style>
