<template>
  <div>
    <section v-if="!alignedRight" class="section">
      <div class="content">
        <slot name="content" />
      </div>
      <div class="media">
        <slot name="media" />
      </div>
    </section>
    <section v-if="alignedRight" class="section">
      <div class="media">
        <slot name="media" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionContainer",
  props: {
    alignedRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.section {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.section > div {
  padding: 1em;
}

.content {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
}

.media {
  width: 30%;
}

@media screen and (max-width: 1400px) {
  .content {
    width: 50%;
  }
}
@media screen and (max-width: 1024px) {
  .content {
    width: 70%;
  }
}

@media screen and (max-width: 700px) {
  .section {
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
  .content,
  .media {
    width: 100%;
  }
}
</style>
