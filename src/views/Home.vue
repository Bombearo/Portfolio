<template>
  <div class="home">
    <AboutContainer />
    <MidCard />
    <GithubDesc />
    <ExperienceContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/Github/GithubDesc/GithubDesc.vue";
import MidCard from "@/components/MidCard/MidCard.vue";
import ExperienceContainer from "@/components/Experience/ExperienceContainer/ExperienceContainer.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    GithubDesc,
    MidCard,
    ExperienceContainer,
  },
};
</script>
