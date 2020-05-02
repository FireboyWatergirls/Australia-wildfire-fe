import Map from '@/views/Map/Map'
import Analysis from '@/views/Analysis/Analysis'
import Model from '@/views/Model/Model'
import About from '@/views/About/About'

const NavList = [
  {
    path: '/map',
    name: 'map',
    component: Map,
    text: 'Map'
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis,
    text: 'Analysis'
  },
  {
    path: '/model',
    name: 'model',
    component: Model,
    text: 'Model'
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    text: 'About'
  }
]
export default NavList
