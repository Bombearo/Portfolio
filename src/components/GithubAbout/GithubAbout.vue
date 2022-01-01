<template>
  <div class="container">
    <div class="img-container">
      <img :src="getUser().avatar_url" alt="" />
    </div>

    <h4>
      <a :href="getUser().html_url" target="_blank" rel="noopener noreferrer">{{
        getUser().login
      }}</a>
    </h4>
    <p class="bio">{{ getUser().bio }}</p>

    <div class="stats">
      <div class="repo-count">
        <p>Total repos: {{ getUser().public_repos }}</p>
      </div>

      <div class="followers">
        <p>Followers: {{ getUser().followers }}</p>
      </div>
      <div class="following">
        <p>Following: {{ getUser().following }}</p>
      </div>
    </div>
    <div class="created">
      <p>{{ getUser().loyalty }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubAbout",
  methods: {
    getUser() {
      return {
        login: "Bombearo",
        repos_url: "https://api.github.com/users/Bombearo/repos",
        avatar_url: "https://avatars.githubusercontent.com/u/69163892?v=4",
        html_url: "https://github.com/Bombearo",
        bio: "Hi Everyone, I'm an 19 year old student from the UK who's looking to study Computer Science at Uni! I enjoy solving puzzles, but also creating music.",
        followers: 15,
        following: 15,
        public_repos: 9,
        created_at: "2020-08-03T17:26:55Z",
        loyalty: "Created 1 year, 1 month, and 1 day ago",
      };
    },
  },
};
</script>

<style scoped>
/*Temporary font*/
@font-face {
  font-family: montserrat;
  src: url(../../assets/fonts/Montserrat-Medium.ttf);
}
@font-face {
  font-family: montserrat-bold;
  src: url(../../assets/fonts/Montserrat-Bold.ttf);
}
@font-face {
  font-family: montserrat-light;
  src: url(../../assets/fonts/Montserrat-Light.ttf);
}

div {
  font-family: montserrat, monospace;
  font-size: 0.9rem;
  margin: 0.2em;
}

h4 {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  font-family: montserrat-bold, monospace;
  color: black;
}

a:hover {
  color: grey;
}

.container {
  background-color: lightgray;
  border-radius: 2rem;
  padding: 5rem 1.5rem;
  box-shadow: gray 0.5em 0.7rem;
}

.container:hover {
  transform: scale(1.01);
  box-shadow: gray 0.6em 0.8rem;
}

.bio {
  font-family: montserrat-light, monospace;
}

.created {
  text-align: right;
  color: grey;
  font-size: 0.5rem;
}

.stats {
  display: flex;
  justify-content: space-evenly;
}

.img-container {
  border-radius: 50%;
  overflow: hidden;
  width: 70%;
  margin: auto;
}

img {
  width: 100%;
}
</style>
