<template>
  <div>
      <input type="text" v-model='message'>
      <p>{{message}}</p>
  </div>
  
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: "This data is reactive!"
    }
  }
};
</script>

<style scoped>
  
</style>