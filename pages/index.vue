<template>
  <section class="container">
    <div :text="text">{{text}}</div>
    <button @click="test1++">add test1</button>: {{test1}}
    <div>
      <logo />
      <h1>{{test1}}</h1>
      <h1 class="title">
        nuxt-learning
      </h1>
      <h2 class="subtitle">
        My classy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'

export default {
  components: {
    Logo
  },

  data () {
    console.log(Vue.prototype.$isServer)
    return {
      isServer: Vue.prototype.$isServer,
      text: this.isServer ? 'isServer' : 'isClient'
    }
  },

  created () {
    this.text = this.isServer ? 'isServer' : 'isClient'
    console.log('this.text:', this.isServer, this.text)
  },

  async asyncData () {
    const test1 = await new Promise(r => r(1));

    return {
      test1
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
