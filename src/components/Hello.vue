<template>
  <div id="hello">
    <p>This is {{name}} Page!!</p>
    <div>
      <p>Count is {{count}}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
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
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

