<template>
  <div>
    <SectionContainer :alignedRight="true">
      <template v-slot:content>
        <div class="desc">
          <experience-text
            v-for="interest in getInterestList()"
            :key="interest"
            v-bind="interest"
          />
        </div>
      </template>
      <template v-slot:media> <MediaGraphic :imagesrc="imagesrc" /> </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../../SectionContainer/SectionContainer.vue";
import ExperienceText from "../ExperienceText/ExperienceText.vue";
import MediaGraphic from "../../Utility/MediaGraphic/MediaGraphic.vue";

let interests = require("@/assets/api/interests.json");
let imagesrc = require("@/assets/images/HKGraphic.jpg");
let links = require("@/assets/api/links.json")

export default {
  name: "OnlineContainer",
  components: { SectionContainer, MediaGraphic, ExperienceText },
  data() {
    return {
      interestList: interests,
      imagesrc: imagesrc,
    };
  },
  methods:{
    getInterestList(){
      interests.forEach(interest => {
        switch (interest['title'].toLowerCase()){
          case "github":
            interest.href=links.github;
            break;
          case "article writing":
            interest.href=links.medium;
            break;
          default:
            break;
        }
      });
      return interests;
    }
  }
};
</script>

<style scoped></style>
