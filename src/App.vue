<template>
  <div id="app">
  <myheader></myheader>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
<hello></hello>

  </div>
</template>

<script>
import myheader from './components/Nav.vue'
import hello from './components/Hello.vue'
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  name: 'app',
  components: {
    myheader, hello
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
