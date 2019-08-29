import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Hello from '@/components/Hello'

Vue.use(Router)

//const Home = () => import(/* webpackChunkName: "group-home" */ '@/components/Home')     // @ is an alias for /src directory that is setup in webpack
//const Hello = () => import(/* webpackChunkName: "group-hello" */ '@/components/Hello')
//const Home = () => import('@/components/Home')     // @ is an alias for /src directory that is setup in webpack
//const Hello = () => import('@/components/Hello')

const test = {'r':'r'}

export function createRouter () {
  return new Router({
    mode: 'history',
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