<template>
  <div class="nav">
    <router-link class="link nav__about" to="/">Home</router-link>
    <router-link class="link nav__all-jokes" to="/alljokes"
      >All jokes</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('setCurrentJoke');
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 70px 0 50px;
}
.nav__about {
  margin-right: 4rem;
}
.link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 24px;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
