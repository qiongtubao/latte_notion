import comp from "/home/dong/Documents/github/latte_notion/src/vuepress/docs/.vuepress/.temp/pages/latte/day/home.html.vue"
const data = JSON.parse("{\"path\":\"/latte/day/home.html\",\"title\":\"Docs 常用文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"data\":\"2022-06-14T00:00:00.000Z\",\"lang\":\"zh-CN\",\"title\":\"Docs 常用文档\",\"description\":\"收集常用的文档\"},\"headers\":[{\"level\":2,\"title\":\"foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"latte/day/home.md\",\"excerpt\":\"\\n<h2>foo</h2>\\n<h1>Docs</h1>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
