<template>
  <div id="app">
    <queue-header v-bind:isLogin="isLogin" v-bind:name="username"/>
    <router-view v-on:login="loginsuccess" :username="username"/>
    <div id="content" class="content">
    </div>
  </div>
</template>

<script>
import QueueHeader from './components/layout/QueueHeader.vue'

export default {
  name: 'App',
  components: {
    'queue-header':QueueHeader,
    
  },
  data() {
    return {
      isLogin : false,
      username :null,
      loginData : null,


    }
  },
  methods: {
    loginsuccess: function(data){
      console.log(data)
      this.loginData = data
      this.isLogin = true
      this.username = data.name
      localStorage.setItem("user",this.loginData)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar{
    z-index: 1;
    width: 100%;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
}
</style>

