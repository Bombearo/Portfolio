<template>
  <div class="container">
    <h4>
      <a :href="repoData.html_url" target="_blank">{{ repoData.name }}</a>
    </h4>
    <p>{{ repoData.description }}</p>
    <div class="language-container">
      <span
        v-for="language in repoData.languages"
        :key="language"
        :style="{ width: language.percentage }"
        class="lang-item"
        :class="language.name"
      >
      </span>
    </div>
    <div class="language-key">
      <div
        class="key-item"
        v-for="language in repoData.languages"
        :key="language"
        v-bind="{ name: language.name, percentage: language.percentage }"
      ></div>
    </div>

    <div class="watch-stars">
      <div class="stars">Stargazers: {{ repoData.stargazers_count }}</div>
      <div class="watchers">Watchers: {{ repoData.watchers_count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo",
  props: { repoData: { type: Object } },
};
</script>

<style scoped>
.container {
  background-color: lightgray;
  width: 100%;
  border-radius: 2em;
  text-align: center;
}

.language-container {
  display: flex;
  width: 80%;
  overflow: hidden;
  margin: auto;
  height: 1em;
  min-height: 5%;
  border-radius: 1em;
}

.lang-item {
  height: 100%;
}

.watch-stars {
  display: flex;
  justify-content: space-evenly;
}

.Vue {
  background-color: green;
  color: green;
}
.JavaScript {
  background-color: yellow;
}
.HTML {
  background-color: orange;
}
</style>