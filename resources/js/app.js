import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import Home from './components/Home.vue';
import '../sass/app.scss'

import * as bootstrap from 'bootstrap'

const app = createApp({});

app.component('home-component', Home);

app.mount("#app");

