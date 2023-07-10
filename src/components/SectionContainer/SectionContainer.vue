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
    contentWidth: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      mediaW: `${100 - this.contentWidth - 5}%`,
      contentW: `${this.contentWidth - 5}%`,
    };
  },
};
</script>

<style scoped>
.section {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  margin-bottom: 5vh;
}

.section > div {
  padding: 1em;
}

.content {
  display: flex;
  width: v-bind(contentW);
  align-items: center;
  justify-content: space-between;
}

.media {
  width: v-bind(mediaW);
}

@media screen and (max-width: 1024px) {
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
