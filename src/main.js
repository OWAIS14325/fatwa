import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import firebase from "firebase"
// eslint-disable-next-line no-unused-vars
import firebaseApp from "@/firebase/firebase.js" 

 
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
export const app = createApp(App).use(store).use(router).mount('#app')
