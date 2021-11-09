<template>
<div style="height:500px">
  <div>这是pageA页面,路由为’/pageA‘</div>
  <!-- <div>pageA</div> -->
  <el-button @click="topageB">topageB（默认路由方式）</el-button>
</div>
</template>
<script>


export default {
  methods: {
    topageB(){
      this.$router.push('/pageB')
    }
  },
}
</script>
