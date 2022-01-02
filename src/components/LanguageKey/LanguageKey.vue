<template>
  <div>
    <span :style="{ 'background-color': colour, height: '1em' }"></span>
    <p>{{ name }} {{ percentage }}</p>
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

<style scoped></style>
