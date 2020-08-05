import devTools from '@vue/devtools';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import SchematicMaps from "./screens/SchematicMaps";
import CostTolls from "./screens/CostTolls";
import Routes from "./screens/Routes";
import App from "./App";
import * as VueGoogleMaps from 'vue2-google-maps';

const NotFound = {template: '<p>Page not found</p>'};
//const About = {template: '<p>About page</p>'};

Vue.config.productionTip = false;
//Vue.loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=geometry');

if (process.env.NODE_ENV === 'development') {
  devTools.connect('localhost', 8098);
}

const routes = {
  '': CostTolls,
  '/': CostTolls,
  '/schematic_old': SchematicMaps,
  '/schematic_old/': SchematicMaps,
  '/cost_tolls': CostTolls,
  '/cost_tolls/': CostTolls,
  '/routes': Routes,
  '/routes/': Routes,
  '/about': App,
  '/about/': App,
}

//https://github.com/xkjyeah/vue-google-maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC1e9L1eA1YyOhsKW4-BhhwHD2fgtqWnak',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
});

new Vue({
  vuetify,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    viewComponent() {
      console.log(this.currentRoute);
      const path = this.currentRoute.replace('/promlert', '');
      return routes[path] || NotFound
    }
  },
  render(h) {
    return h(this.viewComponent)
  },
}).$mount('#app');
