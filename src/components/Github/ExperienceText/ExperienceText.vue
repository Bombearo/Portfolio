<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ExperienceText",
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
h4 {
  font-family: montserrat-semiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;

  /* identical to box height */
  text-align: left;
  letter-spacing: 0.15em;

  text-transform: uppercase;
}
p {
  font-family: montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #000000;
}
</style>
