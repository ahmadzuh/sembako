import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'


Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAK0JxXb1yGeJfZ7p9219hhcxozTWfOGY4",
  authDomain: "belanjo-yuk.firebaseapp.com",
  projectId: "belanjo-yuk",
  storageBucket: "belanjo-yuk.appspot.com",
  messagingSenderId: "60046578284",
  appId: "1:60046578284:web:85142fa19be8b676f3be49",
  measurementId: "G-9BMB374BB4"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
