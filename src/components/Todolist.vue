<template>
    <div class="hello">
        <input type="text " v-model="newTodo">
        <button class="button" @click="addIng">ADD</button>
        <div v-for="(ing,index) in ingredients" :key="index">
            <p v-on:click="deleteIng(id)">{{ing}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Todolist",

    data() {
      return {
        newTodo: 'ssdfdf'
      };
    },

    computed: {

      ingredients() {
        return this.$store.getters.ingredients;

      }
    },
    methods: {
      addIng() {
        this.$store.commit('addNewTodo', {task:this.newTodo})
      },
      deleteIng(id) {
        this.$store.commit('del')
      }
    }

  };
</script>

<style scoped>

</style>