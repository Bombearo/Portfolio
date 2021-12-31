<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <About />
    <GithubDesc />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About/About.vue";
import GithubDesc from "@/components/GithubDesc/GithubDesc.vue";

export default {
  name: "Home",
  components: {
    About,
    GithubDesc,
  },
};
</script>
