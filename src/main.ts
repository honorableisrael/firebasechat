import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBL6HyvgRlZOMiV4P4ZygOCifGXAP7V4lU',
  authDomain: 'chatwithhilaryvue.firebaseapp.com',
  databaseURL: 'https://chatwithhilaryvue.firebaseio.com',
  projectId: 'chatwithhilaryvue',
  storageBucket: 'chatwithhilaryvue.appspot.com',
  messagingSenderId: '492709893322',
  appId: '1:492709893322:web:64ed17386a413925981033',
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
