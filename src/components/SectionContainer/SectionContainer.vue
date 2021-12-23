<template>
  <div>
    <section v-if="!alignedRight" class="section">
      <div class="content">
        <slot />
      </div>
      <div class="media">
        <slot />
      </div>
    </section>
    <section v-if="alignedRight" class="section">
      <div class="media">
        <slot />
      </div>
      <div class="content">
        <slot />
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
}
</style>
