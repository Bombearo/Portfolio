<template>
  <div class="home">
    <WelcomeContainer />
    <AboutContainer />
    <MidCard />
    <GithubDesc />
    <EducationExperienceContainer />
    <ContactContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/Github/GithubDesc/GithubDesc.vue";
import MidCard from "@/components/MidCard/MidCard.vue";
import ContactContainer from "@/components/ContactContainer/ContactContainer.vue";
import EducationExperienceContainer from "@/components/EducationExperience/EducationExperienceContainer.vue";
import WelcomeContainer from "@/components/WelcomeContainer/WelcomeContainer.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    GithubDesc,
    MidCard,
    ContactContainer,
    EducationExperienceContainer,
    WelcomeContainer
  },
};
</script>

<style>
h4{
  font-size: clamp(1.5rem, 1.09090909091rem + 1.51515151515vw , 2rem);
  text-transform: uppercase;
}
p{
  font-size: clamp(.9rem, 0.818181818182rem + 0.30303030303vw, 1rem);
}
</style>
