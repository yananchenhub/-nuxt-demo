<template>
<div>
  <div>pageA</div>
  <el-button @click="topageB">topageB</el-button>
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
