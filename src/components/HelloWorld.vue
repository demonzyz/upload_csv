<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>{{msg}}</el-main>
    </el-container>
  </el-container>
</template>

<script>

import App from "../App";

export default {
  extends: App,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  // created() {
  //   console.log(this)
  //   console.log("子类不改写", this.a);
  //   // this.add()
  //   this.title ='不改写'
  //
  // },
  // computed: {},
  //
  // methods: {
  //
  // },
  // mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body,#app{
    margin: 0;
    padding: 0;
    height:100%;
  }
</style>
