import { defineClientConfig, defineClientAppEnhance } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// export default defineClientAppEnhance(({app}) => {
//     app.use(ElementPlus)
// })

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
  },
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(ElementPlus)
  }
});