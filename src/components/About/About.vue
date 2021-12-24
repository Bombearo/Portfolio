<template>
  <div>
    <SectionContainer>
      <template v-slot:content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          odit natus dolore vero aliquam deleniti ullam, dignissimos minus ex
          molestiae nesciunt facilis repudiandae necessitatibus autem explicabo
          laborum fugit molestias. Quos!
        </p>
      </template>
      <template v-slot:media>
        <img src="../../assets/temp/PFP.jpg" />
      </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../SectionContainer/SectionContainer.vue";

export default {
  name: "About",
  components: { SectionContainer },
};
</script>

<style scoped></style>
