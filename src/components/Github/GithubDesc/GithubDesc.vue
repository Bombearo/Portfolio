<template>
  <div>
    <SectionContainer :alignedRight="true">
      <template v-slot:content>
        <div class="desc">
          <experience-text
            title="Github"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing massa est sit. Dictum eu turpis enim ullamcorper rutrum euismod. Nisi, commodo netus sed rhoncus amet. Porttitor tincidunt nunc magna blandit ullamcorper."
          />
          <experience-text
            title="Article Writing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing massa est sit. Dictum eu turpis enim ullamcorper rutrum euismod. Nisi, commodo netus sed rhoncus amet. Porttitor tincidunt nunc magna blandit ullamcorper."
          />
          <experience-text
            title="Volunteering"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing massa est sit. Dictum eu turpis enim ullamcorper rutrum euismod. Nisi, commodo netus sed rhoncus amet. Porttitor tincidunt nunc magna blandit ullamcorper."
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

export default {
  name: "GithubDesc",
  components: { SectionContainer, GithubAbout, ExperienceText },
};
</script>

<style scoped></style>
