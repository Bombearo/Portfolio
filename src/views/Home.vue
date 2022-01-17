<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AboutContainer />
    <GithubDesc />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/GithubDesc/GithubDesc.vue";

export default {
  name: "Home",
  components: {
    AboutContainer,
    GithubDesc,
  },
};
</script>
