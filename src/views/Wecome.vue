<template>
  <div class="test-container">
    <div class="editor-container">
        <textarea cols="40" rows="10" v-model="value" @input="handleInput"></textarea>
    </div>
    <svg id="mermaidSvg">
    </svg>
  </div>
  <codemirror
    v-model="code"
    placeholder="Code gose here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tabSize="2"
    :extensions="extensions"
    @ready="log('ready', $event)"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>
 
<script>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
 
import { ref } from "vue";
import mermaid from "mermaid"

export default {
  components: {
    Codemirror,
  },
  methods: {
    
    mounted() {
        
    }
  },
  setup() {
    const code = ref(`console.log('Hello, world!')`);
    const extensions = [javascript(), oneDark];
    mermaid.initialize({startOnLoad: true, render: 'canvas'});
    //const mermaidSvg = `
    //    pie title 人员构成
    //    "工程师" : 43
    //    "销售" : 20
    //    "市场" : 17
    //    "其他" : 5
    //    "管理" : 15`;
    const mermaidSvg = `
    flowchart LR
        A[Hard] -->|Text| B(Round)
        B --> C{Decision}
        C -->|One| D[Result 1]
        C -->|Two| E[Result 2]`;
    mermaid.render("mermaidSvg",mermaidSvg);
    const mermaidChart = "";
    return {
      mermaidChart,
      code,
      extensions,
      log: console.log,
    };
  },
};
</script>

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
</style>