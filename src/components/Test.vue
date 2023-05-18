<template>
  <div id="test">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      msg: 'hi vue js!!'
    }
  },
}
</script>
<style lang="scss">
  #test { color: yellowgreen; }
</style>