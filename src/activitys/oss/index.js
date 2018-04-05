/**
 * @file entry point
 */
import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import store from './store/index.js';


require('es6-promise').polyfill();

const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
