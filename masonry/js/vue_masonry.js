var VueMasonryPlugin = window["vue-masonry-plugin"].VueMasonryPlugin;
Vue.use(VueMasonryPlugin);

let app = new Vue({
  el: "#app",
  data: {
    n: 5,
  },
  methods: {
    addClass: function (i) {
      let min = 1;
      let max = 3;
      let random = Math.floor(Math.random() * (max + 1 - min)) + min;
      return "item" + random;
    },
  },
});
