<template>
  <div>
    <div>
      pageB:{{id}}
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      id:''
    }
  },
  methods: {
  },
  created() {
    this.id = this.$route.params.id;
  },
}
</script>
