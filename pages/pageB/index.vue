<template>
  <div>
    <div>
      pageB
    </div>
    <el-button @click="toPageBid">pageB:id</el-button>
    <el-button @click="toPageC">toPageC</el-button>
  </div>
  
</template>
<script>

  export default{
    methods: {
      toPageBid(){
        this.$router.push('/pageB/1')
      },
      toPageC(){
        // 301等其他类型的跳转到pageCNew
        this.$router.push('/pageC')
      
      }
    }
  }
</script>