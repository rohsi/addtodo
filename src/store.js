import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredients: [
      { id: 1, task: "go" },
      { id: 2, task: "run" },
    ],
  },
  getters: {
    ingredients: state => {
      return state.ingredients;
    },
  },
  mutations: {
    addNewTodo(state, payload) {
      state.ingredients.push({id: state.ingredients.length +1 , task: payload.task});
    }
  },
  mutations: {
    del(state, payload) {
      state.ingredients.splice(id,1) ;
    }
  }

});

