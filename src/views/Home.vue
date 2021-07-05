<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({
  components: {},
})
export default class Home extends Vue {
  map: any = null;
  constructor() {
    super();
    this.map = new WebGIS.Map({
      container: "map",
      style: "webgis://styles/portal",
      center: [113.23, 23.16],
      zoom: 9,
      controls: [{ name: "scale", position: "bottom-left" }],
    });
    this.map.on("load", () => {
      this.$store.commit("App/setMap", this.map);
      const div = document.createElement("div");
      div.id = "extend-area";
      div.style.position = "absolute";
      div.style.top = "0";
      div.style.left = "0";
      document.getElementById("map")?.appendChild(div);
      console.log(this.$store.getters["App/getMap"]);
    });
    this.map.on('zoom', (e)=> {
      this.$store.commit('App/setZoom', this.map.instance.getZoom())
    })
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
