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
      <div class="followers">
        <p>Followers: {{ getUser().followers }}</p>
      </div>
      <div class="following">
        <p>Following: {{ getUser().following }}</p>
      </div>
    </div>
    <div class="repo-count">
      <p>Total repos: {{ getUser().public_repos }}</p>
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

div {
  font-family: montserrat, monospace;
  font-size: 0.9rem;
  margin: 0.2em;
}

h4 {
  font-style: normal;
  font-weight: 600;

  line-height: 0px;

  /* identical to box height */
  letter-spacing: 0.08em;
}

a {
  text-decoration: none;
  font-family: montserrat-semiBold, monospace;
}
a:visited {
  color: #b86707;
}

a:hover {
  color: #7b4504;
}

h4,
p {
  text-align: left;
}
p {
  font-family: montserrat;
  font-style: normal;
  font-weight: normal;

  line-height: 150%;

  /* or 27px */
  letter-spacing: 0.08em;

  font-size: clamp(1rem, 2%, 2rem);
}

.container {
  position: absolute;
  width: max(30%, 30rem);
  height: 80%;
  left: clamp(5em, 10vw, 20em);
  top: 33px;

  background: #ffffff;
  border: 10px solid #82a070;
  box-sizing: border-box;
  box-shadow: 4px 24px 7px rgba(215, 236, 201, 0.53);
  border-radius: 55px;
  padding: 20px;
}

.container:hover {
  transform: scale(1.01);
  box-shadow: rgba(174, 194, 162, 0.53) 0.6em 0.8rem;
}

.bio {
  font-family: montserrat-light, monospace;
}

.created p {
  color: grey;
  font-size: 0.7rem;
}

.stats {
  display: flex;
  justify-content: flex-start;
}
.stats > div {
  margin-right: 10%;
}

.img-container {
  border-radius: 100%;
  overflow: hidden;
  margin: auto;
  width: 50%;

  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
}

img {
  transform: scale(1.1);
  width: 100%;
}

@media screen and (max-width: 2000px) {
  .container {
    position: relative;
    left: 0;
    width: 80%;
    height: 100%;
  }
}

@media screen and (max-width: 1440px) {
  .container {
    width: 100%;
  }
}
</style>
