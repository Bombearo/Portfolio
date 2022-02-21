<template>
  <div id="nav"><router-link to="/">Home</router-link> |</div>
  <router-view />

  <footer>Made by Jaden Shek</footer>
</template>

<style>
@font-face {
  font-family: montserrat;
  src: url(./assets/fonts/Montserrat-Medium.ttf);
}

@font-face {
  font-family: montserrat-semiBold;
  src: url(./assets/fonts/Montserrat-SemiBold.ttf);
}
@font-face {
  font-family: montserrat-bold;
  src: url(./assets/fonts/Montserrat-Bold.ttf);
}
@font-face {
  font-family: montserrat-light;
  src: url(./assets/fonts/Montserrat-Light.ttf);
}
@font-face {
  font-family: montserrat-light-italic;
  src: url(../../../assets/fonts/Montserrat-LightItalic.ttf);
}
@font-face {
  font-family: montserrat-light-italic;
  src: url(../../../assets/fonts/Montserrat-LightItalic.ttf);
}

div {
  font-family: montserrat, monospace;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  color: #cd7308;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;

  /* identical to box height */
  letter-spacing: 0.15em;
}
p {
  font-style: normal;
  font-weight: normal;

  letter-spacing: 0.1rem;
  color: #000000;
  text-align: left;
  font-size: 18px;
}

footer {
  background: #476039;
  color: white;
  padding: 3rem;
  font-family: montserrat, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(1rem, 2vw, 1.75rem);
  line-height: 22px;
}
</style>
