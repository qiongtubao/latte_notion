<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
    <el-menu-item index="0">
        <div>Home</div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
        <template #title>test</template>
        <el-menu-item index="2-1">item</el-menu-item>
    </el-sub-menu>
    </el-menu>

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
                size: 'big',
            }
        },
    });
</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>