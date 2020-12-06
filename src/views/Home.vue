<template>
  <div class="joke">
    <h4 class="joke__title">I can haz dad's joke</h4>
    <div class="joke__text">{{ getCurrentJoke }}</div>
    <button class="joke__button" @click="setCurrentJoke">New one</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['getCurrentJoke']),
  methods: mapActions(['setCurrentJoke']),
};
</script>

<style>
.joke {
  background: rgb(224, 243, 228);
  padding: 1rem 2rem;
  max-width: 80%;
  margin: 0 auto;
  border-radius: 1rem;
}
.joke__title {
  color: rgb(22, 122, 216);
  margin-bottom: 1rem;
}
.joke__text {
  margin-bottom: 1rem;
}
.joke__button {
  border: none;
  color: rgb(255, 255, 255);
  /* text-shadow: 1px 1px 5px black; */
  padding: 0.5rem 1rem;
  background: #42b983;
  border-radius: 0.7rem;
  outline: none;
}
</style>
