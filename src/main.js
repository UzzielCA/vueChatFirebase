import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCPpjvkzSngbnwvanYn3rGMkH6LH1XuYyc",
    authDomain: "vuefire-app-3dae2.firebaseapp.com",
    databaseURL: "https://vuefire-app-3dae2.firebaseio.com",
    projectId: "vuefire-app-3dae2",
    storageBucket: "vuefire-app-3dae2.appspot.com",
    messagingSenderId: "619936423862"
  };

firebase.initializeApp(config);

var db = firebase.firestore();

window.db = db;
db.settings({
  timestampsInSnapshots: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
