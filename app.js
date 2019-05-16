import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// export a factory function for creating fresh app, router and store instances, to avoid cross-request state pollution
export function createApp () {
  // create router instance
  const router = createRouter()
  
  const app = new Vue({
	router,
    // the root instance simply renders the App component.
    render: h => h(App)
  })
  return { app, router }
}