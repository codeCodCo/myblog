// import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import '@/static/fonts/font.css'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  // app.use(createPinia())
  return {
    app,
  }; 
}