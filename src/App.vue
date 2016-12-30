<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from './components/Nav.vue'
import hello from './components/Hello.vue'
import test from './components/test.vue'
import testtt from './components/testtt.vue'

export default {
  data () {
    return {
      msg: 'vue + vuex by huang!'
    }
  },
  name: 'app',
  components: {
    myheader, hello,test,testtt
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
