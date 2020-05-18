import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/Photo'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        photo: Photo,
        content: Content
      }
    }
    // {
    //   path: '/note',
    //   name: 'note',
    //   components: {
    //     header:Header,
    //     home:Note
    //   }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   components: {
    //     header:Header,
    //     home:About
    //   }
    // }
  ]
})
