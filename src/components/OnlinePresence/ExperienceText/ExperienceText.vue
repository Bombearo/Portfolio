<template>
  <div>
    <a :href="href" :title="tooltip"
      ><h4 :class="{ hovering: !!href }">{{ title }}</h4></a
    >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ExperienceText",
  props: {
    title: String,
    text: String,
    href: String,
  },
  computed: {
    tooltip() {
      return `Click me to see my ${this.title}!`;
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: montserrat-semiBold;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(1rem, 0.836363636364rem + 0.606060606061vw, 1.2rem);
  line-height: clamp(1.5rem, 2.5vw, 5rem);

  /* identical to box height */
  text-align: left;
  letter-spacing: 0.15em;

  text-transform: uppercase;
  margin: 0.75em 0 0 0;
}
p {
  font-family: montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(0.9rem, 0.818181818182rem + 0.30303030303vw, 1rem);
  display: flex;
  align-items: center;

  color: #000000;
}
a {
  text-decoration: none;
}

.hovering:hover {
  color: #804905;
}
</style>
