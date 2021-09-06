import Global from './Alert.vue'
import { createApp } from 'vue';
const error = (props) => {
  const div = document.createElement('div');
  console.log(document.querySelector('#message-list'))
  console.log(Global)
  document.querySelector('#message-list').appendChild(div);
  createApp(
    Global, 
    {text:props,type:'error'}
  ).mount(div)
}
const success = (props) => {
  const div = document.createElement('div');
  document.querySelector('#message-list').appendChild(div);
  createApp(
    Global, 
    {text:props,type:'success'}
  ).mount(div)
}


export default {
  error,
  success
}