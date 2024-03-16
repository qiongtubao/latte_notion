<script lang="ts">
import LatteMermaid from '../../../components/LatteMermaid.vue'
import { ElDatePicker } from 'element-plus';
import {ref} from 'vue'
export default {
  components: {
    LatteMermaid
  },
  mounted() {

  },
  methods: {
    changeTime() {
        console.log(this.date)
    }
  },
  setup() {
    //const dayTime = `flowchart LR\nA[Hard] -->|Text| B(Round)\nB --> C{Decision}\nC -->|One| D[Result 1]\nC -->|Two| E[Result 2]`
    const dayTime = `pie
        "其他": 100
    `;
    const date = ref('')
    return {
      dayTime,
      date
    };
  },
}; 
</script>
<template>
    <el-date-picker v-model="date" type="date"  placeholder="选择日期" :change="changeTime()"/>
    <LatteMermaid :code="dayTime"></LatteMermaid>
</template>
<style>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>