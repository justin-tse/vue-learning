import { h, createApp } from 'vue'

// The bare minimum code required for rendering something to the screen
createApp({
  render: () => h('div', 'hello world!')
}).mount('#app')
