import { createApp } from './app'

// client-specific bootstrapping logic...
const { app } = createApp()

// wait until router has resolved all async before hooks and async components...
router.onReady(() => {
  // this assumes App.vue template root element has 'id=app'
  app.$mount('#app')
})
