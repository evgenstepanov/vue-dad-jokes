import { createStore } from 'vuex';

const url = 'https://icanhazdadjoke.com/';
const headers = {
  Accept: 'application/json',
};

export default createStore({
  state: {
    currentJoke: 'This is joke',
    allJokes: [],
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    },
  },
  actions: {
    async setCurrentJoke(state) {
      try {
        console.log('тут');
        const joke = await fetch(url, { headers });
        const jokeObj = await joke.json();
        state.commit('setCurrentJoke', jokeObj.joke);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
  },
});
