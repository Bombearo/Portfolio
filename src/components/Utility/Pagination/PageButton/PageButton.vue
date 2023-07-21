<template>
  <button
    :disabled="disabled"
    :class="{ hovering: !disabled, disable: disabled }"
    :title="buttonText"
  >
    <img :src="svgPath" :alt="buttonAlt" />
  </button>
</template>
<script>
export default {
  name: "PageButton",
  props: {
    buttonText: { type: String, default: "" },
    colour: { type: String },
    disabled: { type: Boolean },
    svgPath: { type: String },
  },
  computed:{
    buttonAlt(){
      return this.buttonText.slice(0,4)
    }
  }
};
</script>
<style scoped>
button {
  all: unset;
  border-radius: 1rem;
  background-color: #657f56;
  color: #b3cca3;
  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hovering:hover {
  color: #fff;
  transform: scale(1.05);
}

.disable {
  opacity: 50%;
}
</style>
