<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
  
</template>

<script>
  import Footer from "../components/Footer.vue"
  import Header from "../components/Header.vue"

  export default {
    components:{
      Footer,
      Header,
    }
  }
</script>
