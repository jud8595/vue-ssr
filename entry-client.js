import { createApp } from './app'

// client-specific bootstrapping logic...
const { app, router, store } = createApp()

// wait until router has resolved all async before hooks and async components...
router.onReady(() => {
  if (window.__INITIAL_STATE__) {
    // We initialize the store state with the data injected from the server
    store.replaceState(window.__INITIAL_STATE__)
  }

  // this assumes App.vue template root element has 'id=app'
  app.$mount('#app')
})
