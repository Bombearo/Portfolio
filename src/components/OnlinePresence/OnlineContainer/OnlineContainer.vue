<template>
  <div>
    <SectionContainer :alignedRight="true">
      <template v-slot:content>
        <div class="desc">
          <experience-text
            v-for="interest in interestList"
            :key="interest"
            v-bind="interest"
          />
        </div>
      </template>
      <template v-slot:media> <MediaGraphic :imagesrc="imagesrc"/> </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../../SectionContainer/SectionContainer.vue";
import ExperienceText from "../ExperienceText/ExperienceText.vue";
import interests from "@/assets/api/interests.json";
import MediaGraphic from "../../Utility/MediaGraphic/MediaGraphic.vue";

let imagesrc = require("@/assets/images/HKGraphic.jpg");

export default {
  name: "OnlineContainer",
  components: { SectionContainer, MediaGraphic, ExperienceText },
  data() {
    return {
      interestList: interests,
      imagesrc:imagesrc
    };
  },
};
</script>

<style scoped></style>
