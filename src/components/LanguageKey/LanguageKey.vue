<template>
  <div class="container">
    <div class="colour" :style="{ 'background-color': colour }">
      <span
        :style="{ 'background-color': colour }"
        style="height: 100%; width: 1em"
      ></span>
    </div>
    <div class="text">
      <p>{{ name }} {{ percentage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageKey",
  props: {
    name: { type: String },
    percentage: { type: String },
    colour: { type: String },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.colour {
  height: 1em;
  width: 1em;
  border-radius: 0.2rem;
}

.container > div {
  margin: 0 1rem;
}
</style>
