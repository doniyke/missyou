<template>
  <div id="app">
    <LogoutHeader/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

<script>
import LogoutHeader from '@/components/LogoutHeader.vue'
import Footer from '@/components/Footer.vue'
export default {
    components :{
      LogoutHeader,
      Footer
    }
}
</script>
