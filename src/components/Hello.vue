<template>
  <div id="hello">
    <p>This is {{name}} Page!!</p>
    <div>
      <p>Count is {{count}}</p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        name: 'Hello'
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>

