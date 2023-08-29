import { createApp } from 'vue'
import fusionUi from '../../packages/components/index'

import './style.css'
import '../../packages/styles/base.less'
// import '../../packages/dist/styles/index.css' // 打包后的全量样式
import '../../packages/components/alert/src/index.less' // 开发调试的样式

// import '../../components/input/src/index.less' // 开发调试的样式
import 'virtual:uno.css'
import 'uno.css'
import App from './App.vue'

createApp(App).use(fusionUi).mount('#app')
