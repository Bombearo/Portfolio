<template>
  <div class="home">
    <WelcomeContainer />
    <AboutContainer />
    <MidCard />
    <OnlineContainer />
    <EducationExperienceContainer />
    <ContactContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import MidCard from "@/components/MidCard/MidCard.vue";
import ContactContainer from "@/components/ContactContainer/ContactContainer.vue";
import EducationExperienceContainer from "@/components/EducationExperience/EducationExperienceContainer.vue";
import WelcomeContainer from "@/components/WelcomeContainer/WelcomeContainer.vue";
import OnlineContainer from "../components/OnlinePresence/OnlineContainer/OnlineContainer.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    MidCard,
    ContactContainer,
    EducationExperienceContainer,
    WelcomeContainer,
    OnlineContainer
  },
};
</script>

<style>
h4 {
  font-size: clamp(1.5rem, 1.09090909091rem + 1.51515151515vw, 2rem);
  text-transform: uppercase;
}
p {
  font-size: clamp(0.9rem, 0.818181818182rem + 0.30303030303vw, 1rem);
}
</style>
