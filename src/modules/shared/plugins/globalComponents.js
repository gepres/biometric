import { createApp } from 'vue'
const app = createApp({})
app.component('loading-circle',() => import('@/modules/shared/components/loadingCircle.vue'))