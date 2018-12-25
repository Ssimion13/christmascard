import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MomCard from '@/components/MomCard';
import DadCard from '@/components/DadCard';

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MomCard',
      name: 'MomCard',
      component: MomCard
    },
    {
      path: '/DadCard',
      name: 'DadCard',
      component: DadCard
    }
  ]
})
