<template lang="">
    <div class="workItem">
        <div class="year"> {{year}} </div>
        <div class="location"> {{location}}</div>
    </div>
</template>
<script>
export default {
    name:"WorkItem",
    props: {
    year: { type: String },
    location: { type: String },
  },
}
</script>
<style lang="">
.workItem{
    border-radius: 15px;
    border: 3px solid #657F56;
}
</style>