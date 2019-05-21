<template>
  <div id="home">
    <p>This is {{name}} Page!</p>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
	    return {
	      name: 'Home'
	    }
	  }
  }
</script>
