<template> 
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/DataBindingList2">Data Binding</router-link>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  data() { 
    return { 
      
    }
  },
  components: {
    
  }
}
</script>

<style>
  #app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px; 
  }
</style>