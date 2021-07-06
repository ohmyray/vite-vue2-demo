<template>
  <div class="package-card-container">
    <el-button
      @click="handleOpenCitySelect"
      :class="{ active: statusCitySelect }"
      >城市选择</el-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import elementUI from "element-ui";
Vue.use(elementUI);

@Component
export default class Card extends Vue {
  statusCitySelect: boolean = false;

  handleOpenCitySelect() {
    this.$emit("card:open-city-select", this.statusCitySelect);
  }
}
</script>

<style lang="scss" scoped>
.package-card-container {
  width: 100px;
  height: 100px;
  background: #fcc;
}
.active {
  background: #fcc;
}
</style>
