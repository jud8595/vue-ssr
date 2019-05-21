<template>
  <div id="app">
    <p>{{greeting}} First Vue Project!</p>
	  <nav>
      <router-link to="/">Home</router-link>
      /
      <router-link to="/hello">Hello</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
	  return {
	    greeting: 'Hello'
	  }
	}
  }
</script>