import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCodemirror from 'vue-codemirror'
import {createRouter, createWebHashHistory} from 'vue-router'
const Wecome = () => import('./views/Wecome.vue')
const Home = () => import('./views/Home.vue')
const Hello = () => import('./views/Hello.vue')
const routes = [
  { path: '/', component: Wecome },
  { path: '/Home', component: Home},
  { path: '/Hello', component: Hello}
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App) 
app.use(router)
app.use(VueCodemirror)
app.use(ElementPlus, {
    
})

app.mount('#app')
