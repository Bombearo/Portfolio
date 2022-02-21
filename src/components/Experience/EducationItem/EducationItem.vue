<template>
  <div class="item">
    <div class="date">
      <h3>
        {{ dateRange }}
      </h3>
    </div>
    <div class="qualifications">
      <div class="qualification">
        {{ qualification }}
      </div>
      <div class="subText">
        {{ subText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationItem",
  props: {
    dateRange: String,
    qualification: String,
    subText: String,
  },
};
</script>

<style scoped>
@font-face {
  font-family: montserrat-italic;
  src: url(../../../assets/fonts/Montserrat-LightItalic.ttf);
}

.item {
  display: flex;
  justify-content: space-between;
  border: 3px solid #657f56;
  border-radius: 15px;
  padding: 1rem;
  font-family: montserrat-italic;
  margin-bottom: 2rem;
}
.date {
  display: flex;
  align-items: center;
  width: 30%;
}
.qualifications {
  width: 50%;
}
</style>
