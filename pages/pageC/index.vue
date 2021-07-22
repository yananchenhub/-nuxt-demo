<template>
  <div>
    <div>pageC</div>
    <el-button @click="toPageCid">pageC:id</el-button>
  </div>
</template>
<script>

  export default{
    methods: {
      toPageCid(){
        this.$router.push('/pageCNew/1')
      }
    }
  }
</script>