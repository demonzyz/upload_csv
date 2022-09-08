<template>
  <el-container>
    <el-aside width="200px">左侧菜单栏</el-aside>
    <el-container>
      <el-header>顶部背景图</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form label-width="120px" label-position="left">
              <el-form-item label="项目" prop="pass">
                <el-select v-model="formInline.region" placeholder="请输入你的项目组">
                  <el-option label="R线" value="shanghai"></el-option>
                  <el-option label="F线" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="只支持csv文件" prop="checkPass">
                <el-upload
                  class="upload-mode"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label-position="left">
                <el-button type="primary" >提交</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="7">

          </el-col>
          <el-col :span="6">

          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>



@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");

<script>
    // import App from "../App";

    export default {
        name: "home",
        // extends: App,
      data() {
        return {
          fileList: [],
          formInline: {
            user: '',
            region: ''
          }
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>

</style>
