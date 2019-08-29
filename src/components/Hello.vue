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
    // Server-side only
    serverPrefetch () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.increment()
          resolve(this.$store.state.count)
        }, 500);
      });
    },
    created () {
      console.log("[Hello] created")
      // IMPORTANT: created is called each time the component is added to DOM (eg. route changes)    
    },
    destroyed () {
      console.log("[Hello] destroyed")
      // IMPORTANT: destroyed is called each time the component is removed from DOM (eg. route changes)
    },
    mounted () {
      console.log("[Hello] mounted")
      // IMPORTANT: mounted is called each time the same route is visited
      if (this.$store.state.firstIncrement == false) {
        this.$store.commit('firstIncrement')
        setTimeout(() => {
          this.increment()
        }, 1000);
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

