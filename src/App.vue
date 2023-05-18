<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Test from './components/Test'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Test,
    Footer
  }
}
</script>

<style>
@charset "UTF-8";
@import url('./assets/scss/font.scss');
@import url('./assets/scss/style.scss');
</style>
