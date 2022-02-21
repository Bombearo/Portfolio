<template>
  <div class="item">
    <div class="date">
      <h4>
        {{ dateRange }}
      </h4>
    </div>
    <div class="qualifications">
      <div class="qualification">
        <h3>
          {{ qualification }}
        </h3>
      </div>
      <div class="subText">
        <p>{{ subText }}</p>
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
  font-family: montserrat-light;
  src: url(../../../assets/fonts/Montserrat-Light.ttf);
}

@font-face {
  font-family: montserrat-light-italic;
  src: url(../../../assets/fonts/Montserrat-LightItalic.ttf);
}

.item {
  display: flex;
  justify-content: space-between;
  border: 3px solid #657f56;
  border-radius: 15px;
  padding: 1rem;
  font-family: montserrat-light;
  margin-bottom: 2rem;
}
.date {
  display: flex;
  align-items: center;
  width: 30%;
}
.qualifications {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  font-family: montserrat-light-italic;
}
h3,
p {
  margin: 0;
}

h3 {
  font-size: 28px;
}
h4,
p {
  font-size: 24px;
}
</style>
