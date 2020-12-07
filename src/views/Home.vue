<template>
  <div class="joke">
    <h4 class="joke__title">I can haz dad's joke</h4>
    <p class="joke__text">{{ getCurrentJoke }}</p>
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
  padding: 2rem 3rem;
  margin: 0 auto;
  border-radius: 1rem;
  max-width: 30rem;
  font-size: 24px;
  box-shadow: 3px 3px 5px rgb(151, 150, 150);
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
  padding: 0.5rem 1rem;
  background: #42b983;
  border-radius: 0.7rem;
  outline: none;
  font-size: 24px;
  box-shadow: 3px 3px 5px rgb(151, 150, 150);
}
@media (max-width: 400px) {
  .joke {
    max-width: 90%;
  }
}
</style>
