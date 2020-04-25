<template>
  <div class="container">
    <el-button type="primary">抽奖</el-button>
    <el-button type="primary" @click="goAskPage">点名提问</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }

  },
  created () {

  },
  methods: {
    goAskPage() {
      this.$router.push({path: '/ask'})
    }
  }
}
</script>
<style>
</style>