import Global from './Alert.vue'
import { createApp } from 'vue'
const instances = []
const error = (props) => {
  const div = document.createElement('div')
  div.className = "message-item"
  document.querySelector('#message-list').appendChild(div)
  const ele = createApp(Global, { text: props, type: 'error' }).mount(div)
  setTimeout(() => {
    ele.$.appContext.app.unmount()
    document.querySelector('#message-list').removeChild(div)
  }, 3000)
}
const success = (props) => {
  const div = document.createElement('div')
  div.className = "message-item"
  document.querySelector('#message-list').appendChild(div)
  const ele = createApp(Global, { text: props, type: 'success' }).mount(div)
  setTimeout(() => {
    ele.$.appContext.app.unmount()
    document.querySelector('#message-list').removeChild(div)
  }, 3000)
}

export default {
  error,
  success,
}
