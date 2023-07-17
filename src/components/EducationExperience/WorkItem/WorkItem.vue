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
  font-size: clamp(1rem, 0.836363636364rem + 0.606060606061vw, 1.2rem);
  font-style: italic;
  font-weight: 500;

  grid-area: title;
  align-self: center;
}

.description {
  font-size: clamp(0.9rem, 0.818181818182rem + 0.30303030303vw, 1rem);
  font-style: normal;
  font-weight: 400;
  grid-area: description;
}

@media screen {
}
</style>
