<template>
  <div v-if="isLowBrowser">
    <script src="//stc.iqiyipic.com/js/lib/sea1.2.jenkins-feLibRelease-100.js"></script>
  </div>
</template>

<script>
  export default {
    props: {
      jobName: String,
      pageInfo: Object
    },

    data () {
      return {
        isLowBrowser: true
      }
    },

    created () {
      if (this.isLowBrowser) {
        Q.projectName = "qiyiV2";
        Q.PageInfo = this.pageInfo || {};
        Q.load(this.jobName);
      }
    }
  };
</script>