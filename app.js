import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './src/store'
import { sync } from 'vuex-router-sync'

// export a factory function for creating fresh app, router and store instances, to avoid cross-request state pollution
export function createApp () {

  // create router and store instance
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store. Router will commit a store mutation.
  sync(store, router)
  
  const app = new Vue({
    router,
    // provide the store using the "store" option.
    // this will inject the store instance to all child components.
    store,
    // the root instance simply renders the App component.
    render: h => h(App)
  })
  return { app , router, store }
}