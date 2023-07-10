<template lang="">
  <div class="EducationItem">
    <div class="year">
      <div class="qualYear">{{ startYear }}-{{ endYear }}</div>

      <div v-if="subtext" class="subtext">
        {{ subtext }}
      </div>
    </div>
    <div class="qualificationContainer">
      <div class="qualification">{{ qualification }}</div>

      <div class="qualInfo">{{ qualInfo }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationItem",
  props: {
    startYear: { type: String },
    endYear: { type: String },
    subtext: { type: String },
    qualification: { type: String },
    qualInfo: { type: String },
  },
};
</script>
<style>
.EducationItem {
  border-radius: 15px;
  border: 3px solid #657f56;
  display: flex;
  justify-content: space-between;
  height: max(5vh, 100px);
  margin-bottom: 20px;
}

.year {
  /* Typography */
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: clamp(0.5em, 0.6em + 0.5vw, 1.2em);
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* Positioning */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Padding */
  padding: 1em;
}

.qualificationContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  color: #000;
  text-align: right;
  font-family: Montserrat;

  font-style: italic;
  font-weight: 400;
  line-height: normal;

  width: 50%;
  margin-top: 1em;
  margin-right: 0.5em;
}

.qualification {
  font-size: clamp(0.5em, 0.7em + 0.5vw, 1.25em);
  flex-wrap: wrap;
}

.qualInfo {
  display: flex;
  font-size: clamp(0.4em, 0.6em + 0.5vw, 1em);
  flex-wrap: wrap;
  justify-content: end;
}

@media screen and (max-width: 1024px) {
  .year {
    font-size: clamp(0.8em, 0.8em + 0.5vw, 1.2em);
  }

  .qualification {
    font-size: clamp(1.25em, 1.25em + 0.5vw, 2.5em);
  }

  .qualInfo {
    font-size: clamp(1em, 1em + 0.5vw, 1.5em);
  }
}
</style>
