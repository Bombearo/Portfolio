<template lang="">
  <div id="pageContainer">
    <PageButton
      buttonText="prev"
      @click="$emit('decrementCurrent')"
      :disabled="isStart"
      :svgPath="leftArrow"
    />
    <PageButton
      buttonText="next"
      @click="$emit('incrementCurrent')"
      :disabled="isEnd"
      :svgPath="rightArrow"
    />
  </div>
</template>
<script>
import PageButton from "./PageButton/PageButton.vue";

let rightArrow = require("@/assets/SVGs/RightArrow.svg")
let leftArrow = require("@/assets/SVGs/LeftArrow.svg")

export default {
  name: "PageContainer",
  components: { PageButton },
  props: {
    currentPage: { type: Number },
    isStart: { type: Boolean },
    isEnd: { type: Boolean },
  },
  data(){
    return{
      rightArrow:rightArrow,
      leftArrow:leftArrow
    }
  }
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
