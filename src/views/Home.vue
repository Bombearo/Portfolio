<template>
  <div class="home">
    <AboutContainer />
    <MidCard />
    <GithubDesc />
    <EducationExperienceContainer/>
    <ContactContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/Github/GithubDesc/GithubDesc.vue";
import MidCard from "@/components/MidCard/MidCard.vue";
import ContactContainer from "../components/ContactContainer/ContactContainer.vue";
import EducationExperienceContainer from "../components/EducationExperience/EducationExperienceContainer.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    GithubDesc,
    MidCard,
    ContactContainer,
    EducationExperienceContainer
  },
};
</script>

<style>


</style>
