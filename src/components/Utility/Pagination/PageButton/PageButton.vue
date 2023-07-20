<template>
  <button
    :disabled="disabled"
    :class="{ hovering: !disabled, disable: disabled }"
  >
    {{ buttonText }}
  </button>
</template>
<script>
export default {
  name: "PageButton",
  props: {
    buttonText: { type: String },
    colour: { type: String },
    disabled: { type: Boolean },
  },
};
</script>
<style scoped>
button {
  all:unset;
  border-radius: 1rem;
  background-color: #657f56;
  color: #b3cca3;
  height: 2.5rem;
  width: 2.5rem;
}

.hovering:hover {
  color: #fff;
  transform: scale(1.05);
}

.disable {
  opacity: 50%;
}
</style>
