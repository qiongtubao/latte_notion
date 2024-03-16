<script setup lang="ts">
import LatteHead from './components/LatteHead.vue'
import LatteLeft from './components/LatteLeft.vue'
</script>

<template>
  <LatteHead></LatteHead>
  <div class="container">
    <el-scrollbar height="400px" class="view1">
      <LatteLeft></LatteLeft>
    </el-scrollbar>
    <el-scrollbar class="view2">
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.aside {
  width: 1px;
}

.view1 {
  flex: 1;
}

.view2 {
  flex: 1;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
