<template>
  <div>
    <NavBar></NavBar>
    <div id="router-content-wrapper">    
      <router-view></router-view>    
    </div>
  </div>  
</template>

<script>
import NavBar from './components/elements/NavBar.vue'
export default { name: 'App', components: { NavBar }}
</script>

<style>
#app {
  font-family: App, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}

#router-content-wrapper {
  margin-top: 360px;
  /* scroll page with fixed nav */
  overflow-y: auto;
}
</style>
