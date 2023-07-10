<template lang="">
  <div class="workItem">
    <div class="year">{{ startYear }}-{{ endYear }}</div>
    <div class="title">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
  props: {
    startYear: { type: String },
    endYear: { type: String },
    title: { type: String },
    description: { type: String },
  },
};
</script>
<style>
.workItem {
  border-radius: 15px;
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas:
    "year title"
    ". description";
  margin-bottom: 20px;
}

.year {
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  flex-wrap: nowrap;
  min-width: 25%;
  grid-area: year;
}

.experience {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  text-align: left;
}
.title,
.description {
  color: #000;
  font-family: Montserrat;
  line-height: normal;
  text-align: left;
}

.title {
  font-size: clamp(1.25rem, 0.840909090909rem + 1.51515151515vw , 1.75rem);
  /*font-size: 28px;*/
  font-style: italic;
  font-weight: 500;

  grid-area: title;
}

.description {
  font-size: clamp(0.8rem, 0.534090909091rem + 0.984848484848vw, 1.125rem);
  font-style: normal;
  font-weight: 400;
  grid-area: description;
}

@media screen {
    
}
</style>
