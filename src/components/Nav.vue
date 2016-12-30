<template>
  <div class="myheader">
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="index" >首页</el-menu-item>
  <el-submenu index="2" >
    <template slot="title">作品</template>
      <el-menu-item index="hello" >hello</el-menu-item>
      <el-menu-item index="counter" >counter</el-menu-item>
      <el-menu-item index="counter-hot" >counter-hot</el-menu-item>
      <el-menu-item index="test" >test</el-menu-item>
      <el-menu-item index="testtt" >testtt</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">github</el-menu-item>
 </el-menu>
  </div>
</template>
<script>
export default {
  name: 'myheader',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect: function(index){
          this.$router.push(index)
      },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
