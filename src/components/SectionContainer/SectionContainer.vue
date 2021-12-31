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
div {
  width: 100vw;
}

.section {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.section > div {
  padding: 1em;
}

.content {
  width: 60%;
}

.media {
  width: 40%;
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
