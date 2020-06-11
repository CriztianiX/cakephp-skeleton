const Vue = require("vue");

Vue.component("Example", () => import("./Components/Example.vue"));

const app = new Vue({
    el: "#app"
});