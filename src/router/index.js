import Vue from 'vue'
import Router from 'vue-router'
import navList from './navList'

Vue.use(Router)
const baseRouter = [
  {
    path: '*',
    redirect: 'map'
  }
]
const routes = baseRouter.concat(navList.map(i => ({
  path: i.path,
  name: i.name,
  component: i.component,
  children: i.children
})))

export default new Router({ routes })
