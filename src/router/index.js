import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import login from '@/components/login'
import noteList from '@/components/noteList'
import editNote from '@/components/editNote'
import notepad from '@/components/notepad'
import chart from '@/components/chart'
import pie from '@/components/pie'
import table from '@/components/table'
import tree from '@/components/tree'

// Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      // name: 'index',
      component: index,
      children: [
        {
          path: '',
          redirect: '/noteList'
        },
        {
          path: '/noteList',
          name: 'noteList',
          component: noteList
        }, {
          path: '/notepad',
          name: 'notepad',
          component: notepad
        }, {
          path: '/chart',
          name: 'chart',
          component: chart
        }, {
          path: '/pie',
          name: 'pie',
          component: pie
        }, {
          path: '/table',
          name: 'table',
          component: table
        }, {
          path: '/tree',
          name: 'tree',
          component: tree
        }]
    },
    {
      path: '/editNote',
      name: 'editNote',
      component: editNote
    }

  ]
})
