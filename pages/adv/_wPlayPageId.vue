<template>
<div>
  我是w类型的播放页
  <div v-if="isV">我是V类型的播放页</div>
  <div v-if="isW">我是W类型的播放页</div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        isV: false,
        isW: false
      } 
    },

    created () {
      const playPageId = this.$route.params.playPageId;
      this.isV = /^v_.+/.test(playPageId);
      this.isW = /^w_.+/.test(playPageId);
    }
  }
</script>