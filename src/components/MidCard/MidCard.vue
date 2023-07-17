<template>
  <div class="sectionContainer">
    <div class="midText">
      <p>
        If you have any questions about tutoring, don’t hesitate to contact me
        at
      </p>
    </div>
    <div class="email">
      <h3>shekjaden@gmail.com</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidCard",
};
</script>

<style scoped>
.sectionContainer {
  background-color: #476039;
  padding: max(1rem, 2vh);
  width: 100%;
}

p {
  font-family: montserrat-semiBold;

  font-style: normal;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.15em;

  color: #82a070;
}
h3 {
  font-family: montserrat-semiBold;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(1rem, 0.836363636364rem + 0.606060606061vw, 1.2rem);
  line-height: 44px;

  /* identical to box height */
  text-align: center;
  letter-spacing: 0.15em;

  color: #d7ecc9;
}
</style>
