<template lang="">
  <div class="workItem">
    <div class="year">{{ year }}</div>
    <div class="location">{{ location }}</div>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
  props: {
    year: { type: String },
    location: { type: String },
  },
};
</script>
<style>
.workItem {
  border-radius: 15px;
  border: 3px solid #657f56;
}

.year {
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.location {
  display: flex;
  width: 322px;
  flex-direction: column;
  flex-shrink: 0;

  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}
</style>
