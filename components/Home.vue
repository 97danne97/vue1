<template>
  <div>
    <h1>Vue</h1>
    <Message></Message> <!-- Message Component -->
    <ul>
      <li v-for="grocery in groceryList" >{{ grocery }}</li>
    </ul>
    <input type="checkbox" v-model="groceryList.cheese">
    <input type="checkbox" v-model="groceryList.milk">
    <input type="checkbox" v-model="groceryList.wine">
    
    <span>{{ checked }}</span>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      groceryList: {'cheese':false, 'milk':false, "wine":true},
      checked:[]
    };
  },
  components: {
    Message
  }
};
</script>

<style>
</style>