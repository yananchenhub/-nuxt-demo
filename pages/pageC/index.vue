<template>
  <div style="margin:50px">
    <div style="margin:20px">
      pageC（这个页面的路由从"/pageC"重定向到“/pageCNew”）
    </div>
    <!-- <el-button @click="toPageCid">pageC:id</el-button> -->
    <div style="margin:20px">
      <nuxt-link to="/pageCNew/1">nuxtTo </nuxt-link>
    </div>
    <div style="margin:20px">
      <nuxt-link to="/pageCNew_function">function </nuxt-link>
    </div>
  </div>
</template>
<script>

  export default{
    methods: {
      toPageCid(){
        //此处会在middleWare里面被转成pageCNew/1
        this.$router.push('/pageC/1')
      }
    }
  }
</script>
