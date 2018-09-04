import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Product/Products'
import Product from '@/components/Product/Product'
import CreateProduct from '@/components/Product/CreateProduct'
import Projects from '@/components/Project/Projects'
import Project from '@/components/Project/Project'
import CreateProject from '@/components/Project/CreateProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/products/new_product',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: Project
    },
    {
      path: '/projects/new_projects',
      name: 'CreateProject',
      component: CreateProject
    }
  ],
  mode: 'history'
})
