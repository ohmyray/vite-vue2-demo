<template>
  <div class="package-card-container"> <el-button>城市选择</el-button></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import elementUI from 'element-ui';
Vue.use(elementUI);

@Component
export default class CitySelect extends Vue {

}
</script>

<style lang="scss" scoped>
.package-card-container {
  width: 100px;
  height: 100px;
  background: #fcc;
}
</style>
