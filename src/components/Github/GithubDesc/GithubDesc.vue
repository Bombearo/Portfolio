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
      <template v-slot:media> <GithubAbout /> </template>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from "../../SectionContainer/SectionContainer.vue";
import GithubAbout from "../GithubAbout/GithubAbout.vue";
import ExperienceText from "../ExperienceText/ExperienceText.vue";
import interests from "@/assets/api/interests.json";

export default {
  name: "GithubDesc",
  components: { SectionContainer, GithubAbout, ExperienceText },
  data() {
    return {
      interestList: interests,
    };
  },
};
</script>

<style scoped></style>
