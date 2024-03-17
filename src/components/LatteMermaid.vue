<template>
    <svg :id="randomId"></svg>
    <svg ref="mermaidSvg"></svg>
    <codemirror
        ref="codeEditor"
        v-model="editorCode"
        placeholder="Code gose here..."
        :style="{ height: '400px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tabSize="2"
        :extensions="extensions"
        @ready="log('ready', $event)"
        @change="change($event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
    />
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    import { ElConfigProvider } from 'element-plus'
    import { Codemirror } from "vue-codemirror";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";
    
    import { ref } from "vue";
    import mermaid from "mermaid"
    export default {
        props: [ 
            "code"
        ],
        mounted() {
            this.change(this.editorCode)
        },
        methods: {
            change(code: string) {
                var self = this;
                mermaid.initialize({startOnLoad: true});
                mermaid.render(this.randomId,code).then(({svg}) => {
                    self.$nextTick(() => {
                        self.$refs.mermaidSvg.innerHTML = svg;
                    });
                });
            }
        },
        setup(props) {
            const extensions = [javascript(), oneDark]; 
            return {
                editorCode: props.code,
                extensions,
                log: console.log,
                randomId: "mermaid-" + Math.random().toString(36).substr(2,9)
            };
        },
        watch: {
            code(value) {
                this.editorCode = value;
                this.change(value);
            }
        }
    };
</script>