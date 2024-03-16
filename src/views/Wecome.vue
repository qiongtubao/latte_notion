<script lang="ts">
import LatteMermaid from '../components/LatteMermaid.vue'
export default {
  components: {
    LatteMermaid
  },
  mounted() {

  },
  methods: {
    
   
  },
  setup() {
    //const dayTime = `flowchart LR\nA[Hard] -->|Text| B(Round)\nB --> C{Decision}\nC -->|One| D[Result 1]\nC -->|Two| E[Result 2]`
    const dayTime = `pie 
    "Dogs": 386
    "Cats": 85.9
    "Rats": 15
    `;
    return {
      dayTime,
    };
  },
};
</script>
<template>
  <LatteMermaid :code="dayTime"></LatteMermaid>
</template>


<style scoped>
    .test-container {
        padding: 0 30px;
        text-align: center;
    }
    .editor-container {
        text-align: left;
        padding: 30px;
        width: 500px;
        margin: 20px auto; 
    }
        .editor-container  textarea {
            border: 1px solid rgb(158,96,96);
            outline: none;
            padding: 20px;
            box-sizing: border-box;
            font-size: 22px;
        }
    .mermaid {
        height: auto;
        width: 50px;
        margin: 20px auto;
        padding: 30px;
        border: 1px solid #ccc;
    }


    #mermaidChart {
        display: flex;
        justify-content: center;
        align-content: flex-start;
        height: fit-content;
        font-family: 'trebuchet ms', verdana, arial, sans-serif;
        font-size: 16px;
    }
</style>../components/LatteMermaid.vue