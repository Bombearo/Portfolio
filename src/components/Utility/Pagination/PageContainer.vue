<template lang="">
  <div id="pageContainer">
    <PageButton
      buttonText="prev"
      @click="$emit('decrementCurrent')"
      :disabled="isStart"
    />
    <PageButton
      buttonText="next"
      @click="$emit('incrementCurrent')"
      :disabled="isEnd"
    />
  </div>
</template>
<script>
import PageButton from "./PageButton/PageButton.vue";

export default {
  name: "PageContainer",
  components: { PageButton },
  props: {
    currentPage: { type: Number },
    isStart: { type: Boolean },
    isEnd: { type: Boolean },
  },
};
</script>
<style scoped>
#pageContainer {
  display: flex;
  margin: auto;
  align-items: flex-end;
  justify-content: space-around;
  flex-grow: 1;
  min-width: 50%;
}
</style>
