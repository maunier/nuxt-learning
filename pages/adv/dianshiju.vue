<template>
<div>
  <h1>低版本页面测试</h1>
  我是电视剧页面
  
  <script v-if="isLowBrowser" src="//stc.iqiyipic.com/js/lib/sea1.2.jenkins-feLibRelease-100.js"></script>
  <script v-if="isLowBrowser" type="text/javascript">
  if (window.Q) {
    Q.projectName = "qiyiV2";
    Q.PageInfo = this.pageInfo || {};
    Q.load(this.jobName);
  }
  </script>
  <!-- <Qiyiv2 job-name="lowBrowserIndex"></Qiyiv2> -->
</div>
</template>

<script>
  import Qiyiv2 from '~/components/Qiyiv2';

  export default {
    components: {
      Qiyiv2
    },

    head () {
      return {
        link: [
          { rel: 'stylesheet', type: 'text/css', href: '//stc.iqiyipic.com/gaze/uniqy/main/css/index.82b5fac4.css' }
        ]
      }
    }
  }
</script>