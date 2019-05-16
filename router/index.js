import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' // @ is an alias for /src directory that is setup in webpack
import Home from '@/components/Home'

Vue.use(Router)

export function createRouter () {
  return new Router({
    //mode: 'history',
    routes: [
		{
		  path: '/',
		  name: 'Home',
		  component: Home
		},
		{
		  path: '/hello',
		  name: 'Hello',
		  component: Hello
		}
    ]
  })
}