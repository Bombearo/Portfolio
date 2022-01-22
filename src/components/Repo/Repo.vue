<template>
  <div class="repoContainer">
    <h4>
      <a :href="repoData.html_url" target="_blank">{{ repoData.name }}</a>
    </h4>
    <p v-if="repoData.description">{{ repoData.description }}</p>
    <p v-else>No description provided</p>
    <div class="language-container">
      <span
        v-for="language in repoData.languages"
        :key="language"
        :style="{
          width: language.percentage,
          'background-color': getColour(language.name),
        }"
        class="lang-item"
      >
      </span>
    </div>
    <div class="language-key">
      <language-key
        class="key-item"
        v-for="language in repoData.languages"
        :key="language"
        v-bind="{
          name: language.name,
          percentage: language.percentage,
          colour: getColour(language.name),
        }"
      ></language-key>
    </div>

    <div class="watch-stars">
      <div class="stars">Stargazers: {{ repoData.stargazers_count }}</div>
      <div class="watchers">Watchers: {{ repoData.watchers_count }}</div>
    </div>
    <div class="creation">
      <p>{{ repoData.time_from_creation }}</p>
    </div>

    <CloneContainer
      :html="repoData.clone_url"
      :ssh="repoData.ssh_url"
      :git="repoData.git_url"
    />

    <div class="reference">
      Colours taken from
      <a
        href="https://github.com/ozh/github-colors/blob/master/colors.json"
        target="_blank"
        rel="noopener noreferrer"
      >
        this github repository</a
      >
    </div>
  </div>
</template>

<script>
import LanguageKey from '../LanguageKey/LanguageKey.vue';
import CloneContainer from '../CloneContainer/CloneContainer.vue';
import colours from '../../assets/colors.json';

export default {
  name: 'Repo',
  props: { repoData: { type: Object } },
  components: { LanguageKey, CloneContainer },
  methods: {
    getColour (name) {
      return colours[name].color;
    }
  }
};
</script>

<style scoped>
.repoContainer {
  background-color: lightgray;
  width: 100%;
  border-radius: 2em;
  text-align: center;
  padding: 2em 0 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
  box-shadow: gray 1.2rem 1.2rem;
}

.repoContainer:hover {
  transform: scale(1.01);
}

.repoContainer > * {
  margin: 1rem;
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

.language-key {
  display: flex;
  margin: auto;
  justify-content: space-evenly;
}
</style>
