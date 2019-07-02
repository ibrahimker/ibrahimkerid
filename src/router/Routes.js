import Home from '../views/home/Home';
import AboutMe from '../views/about/AboutMe';
import Portfolio from '../views/portfolio/Portfolio';
import Blog from '../views/blog/Blog';

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  // {
  //   path:'/about',
  //   name:'About',
  //   component:AboutMe
  // },
  {
    path:'/portfolio',
    name:'Portfolio',
    component:Portfolio
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  }
];
export default routes;