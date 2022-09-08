<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {},
  data () {
    return {
      a: 6,
      title: ''
    };
  },
    // components: {
  //   HelloWorld
  // }
  // created() {
  //   console.log('App',this.a)
  // },
  // computed: {},
  //
  // mounted() {},
  //
  // methods: {
  //   add() {
  //     console.log('父类方法')
  //   }
  // }
  }
</script>

<style type="text/css">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
html,body,#app,.el-container{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
@media screen and (max-width: 768px) {
  #app {
    font-size: 0.05rem;
  }
}
/* 笔记本电脑的字体大小 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #app {
    font-size: 0.08rem;
  }
}
/* 台式电脑显示器屏幕字体大小 */
@media screen and (min-width: 1024px) {
  #app {
    font-size: 0.08rem;
  }
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  background:url("./assets/beijing2.jpg");
  color: #333;
  text-align: center;
  height: 75px !important;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  background-color: #8E8E8E;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
