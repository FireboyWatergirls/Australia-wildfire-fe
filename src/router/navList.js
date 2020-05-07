import Map from '@/views/Map'
import Analysis from '@/views/Analysis'
import Model from '@/views/Model'
import About from '@/views/About'
import Ch1 from '@/views/Analysis/Ch1'
import Ch2 from '@/views/Analysis/Ch2'
import Ch3 from '@/views/Analysis/Ch3'
import Ch4 from '@/views/Analysis/Ch4'

const navList = [
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
    text: 'Analysis',
    children: [{
      path: 'ch1',
      name: 'ch1',
      component: Ch1
    },
    {
      path: 'ch2',
      name: 'ch2',
      component: Ch2
    },
    {
      path: 'ch3',
      name: 'ch3',
      component: Ch3
    },
    {
      path: 'ch4',
      name: 'ch4',
      component: Ch4
    }]
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
export default navList
