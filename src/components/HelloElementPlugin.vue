<template>
    <el-config-provider >
      <app />
      <div>Hello</div>
    </el-config-provider>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  
  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        zIndex: 3000,
        size: 'small',
      }
    },
  })
  </script>