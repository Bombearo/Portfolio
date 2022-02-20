<template>
  <div class="home">
    <AboutContainer />
    <GithubDesc />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContainer from "@/components/About/AboutContainer/AboutContainer.vue";
import GithubDesc from "@/components/GithubDesc/GithubDesc.vue";

export default {
  name: "HomePage",
  components: {
    AboutContainer,
    GithubDesc,
  },
};
</script>
