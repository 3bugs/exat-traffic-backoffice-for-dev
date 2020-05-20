import devTools from '@vue/devtools';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import SchematicMaps from "./SchematicMaps";
import App from "./App";

const NotFound = {template: '<p>Page not found</p>'};
//const About = {template: '<p>About page</p>'};

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  devTools.connect('localhost', 8098);
}

const routes = {
  '/': SchematicMaps,
  '/about': App,
}

new Vue({
  vuetify,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    viewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) {
    return h(this.viewComponent)
  },
}).$mount('#app');
