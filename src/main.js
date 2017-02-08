// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// CSS
import 'semantic-ui-css/semantic.min.css'
import 'flag-icon-css/css/flag-icon.min.css'

// JS
// import 'jquery/dist/jquery.min.js'
// import 'semantic-ui-css/semantic.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
