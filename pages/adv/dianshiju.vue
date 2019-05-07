<template>
<div>
  <h1>低版本页面测试,我是电视剧页面</h1>
  
  <script v-if="$isLowBrowser" src="//stc.iqiyipic.com/js/lib/sea1.2.jenkins-feLibRelease-100.js"></script>
  <script v-if="$isLowBrowser" type="text/javascript">
  if (window.Q) {
    Q.projectName = 'qiyiV2';
    Q.PageInfo = this.pageInfo || {};
    Q.load('lowBrowserIndex');
  }
  </script>
</div>
</template>

<script>
  export default {
    head () {
      return {
        link: [
          { rel: 'stylesheet', type: 'text/css', href: '//stc.iqiyipic.com/gaze/uniqy/main/css/index.82b5fac4.css' }
        ]
      }
    }
  }
</script>