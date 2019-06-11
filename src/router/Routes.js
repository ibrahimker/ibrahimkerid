import Home from '../views/home/Home';

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:Home
  },
  {
    path:'/portfolio',
    name:'Portfolio',
    component:Home
  }
];
export default routes;