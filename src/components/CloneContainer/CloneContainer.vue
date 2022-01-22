<template>
  <div class="git-container">
    <div class="buttons">
      <button
        v-for="item in buttonList"
        :key="item"
        :class="item"
        @click="updateContainer(item[0])"
      >
        {{ item[1] }}
      </button>
    </div>
    <div class="url-container">
      <input type="text" :value="currentURL" readonly />
      <div class="clone">
        <i class="far fa-clone"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloneContainer',
  data () {
    return {
      buttonList: [
        ['html', 'HTTPS'],
        ['ssh', 'SSH'],
        ['git', 'GitHub CLI']
      ],
      currentURL: this.html
    };
  },
  props: {
    html: String,
    ssh: String,
    git: String
  },
  methods: {
    updateContainer (buttonType) {
      this.currentURL = this[buttonType];
    },
    capitalise (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style scoped>
.git-container > * {
  width: 100%;
}

input {
  width: 80%;
}
</style>
