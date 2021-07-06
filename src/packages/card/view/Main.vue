<template>
  <div class="package-card-container">卡片容器</div>
</template>

<script lang="ts">
import Vue from 'vue';
import elementUI from 'element-ui';
Vue.use(elementUI);
export default Vue.extend({
  name: 'package-card',
});
</script>

<style lang="scss" scoped>
.package-card-container {
  width: 100px;
  height: 100px;
  background: #fcc;
}
</style>
