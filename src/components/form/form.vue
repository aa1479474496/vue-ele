<template>
    <el-row :gutter="10">
        <el-col :xs="12" :lg="8">
          <div class="de-box">
            <input type="text" class="de-input">
          </div>
        </el-col>
        <el-col :xs="12" :lg="8">
            <div class="de-box">
              <input type="text" class="de-input">
            </div>
          </el-col>
      </el-row>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .de-box {
    width: 210px;
    background: skyblue;
  }

  .de-input {
    width: 120px;
    height:38px;
    line-height: 38px;
    border: 1px solid #ccc;
  }

</style>