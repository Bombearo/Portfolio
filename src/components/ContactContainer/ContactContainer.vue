<template>
  <div>
    <h4>Contact Me</h4>
    <EmailItem :email="email" subject="Website Contact" />
    <p>or you can find me on</p>

    <div class="other-social">
      <div
        v-for="socialItem in socialItems"
        :key="socialItem.path"
        class="flex-item"
      >
        <SocialItem
          :svgPath="socialItem.path"
          :altText="socialItem.alt"
          :href="socialItem.href"
        />
      </div>
    </div>
    <p class="credit">
      Icons sourced from <a href="https://iconmonstr.com">iconmonstr.com</a>
    </p>
  </div>
</template>
<script>
import SocialItem from "./SocialItem.vue";
import EmailItem from "../Utility/Email/EmailItem.vue";

let links = require("@/assets/api/links.json");

let items = [];
items.push({
  path: require(`@/assets/SVGs/Discord_black.svg`),
  alt: "Discord",
  href: links.discord,
});
items.push({
  path: require(`@/assets/SVGs/LinkedIN_black.svg`),
  alt: "LinkedIn",
  href: links.linkedIn,
});
items.push({
  path: require(`@/assets/SVGs/Medium_black.svg`),
  alt: "Medium",
  href: links.medium,
});

items.push({
  path: require(`@/assets/SVGs/Github.svg`),
  alt: "Github",
  href: links.github,
});

export default {
  name: "ContactContainer",
  components: { SocialItem, EmailItem },
  data() {
    return {
      socialItems: items,
      email: links.email,
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

.other-social {
  display: flex;
  margin: auto;
  align-items: left;
  max-width: 450px;
}

.flex-item {
  width: clamp(40px, 30%, 100px);
  padding: 0;
  margin: auto;
  max-width: 25%;
}



.credit {
  font-size: clamp(0.5rem, 20vw, 0.6rem);
}
</style>
