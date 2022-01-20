<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AboutContainer />
    <GithubDesc />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/Github/GithubDesc/GithubDesc.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    GithubDesc,
  },
};
</script>
