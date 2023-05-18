<template>
  <header id="header">
    <h1><a href="#">To Do List</a></h1>
    <!-- <router-link to="Company">company</router-link> -->
    <p>{{msg}}</p>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'make your list'
    }
  },
}
</script>
<style lang="scss" scoped>
  #header {
    margin-bottom: 30px;
    a,p { color: white; font-family: 'Sigmar', cursive;}
  }
</style>