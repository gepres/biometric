export default {
  name:'cliente',
  component: () => import(/* webpackChunkName: "cliente layout" */ '@/modules/cliente/layouts/ClienteLayout.vue'),
  children: [
    {
      path: '',
      name: 'cliente-home',
      component: () => import(/* webpackChunkName: "cliente-ventas" */ '@/modules/cliente/views/Ventas.vue'),
      meta:{
        nameRoute: 'Home'
      }
    },
    {
      path: 'ventas',
      name: 'cliente-ventas',
      component: () => import(/* webpackChunkName: "cliente-ventas" */ '@/modules/cliente/views/Ventas.vue'),
      meta:{
        nameRoute: 'Ventas'
      }
    },
    {
      path: 'productos',
      name: 'cliente-productos',
      component: () => import(/* webpackChunkName: "cliente-productos" */ '@/modules/cliente/views/Productos.vue'),
      meta:{
        nameRoute: 'Productos'
      }
    },
    {
      path: 'usuarios',
      name: 'cliente-usuarios',
      component: () => import(/* webpackChunkName: "cliente-usuarios" */ '@/modules/cliente/views/Usuarios.vue'),
      meta:{
        nameRoute: 'Usuarios'
      }
    },
    {
      path: 'compras',
      name: 'cliente-compras',
      component: () => import(/* webpackChunkName: "cliente-compras" */ '@/modules/cliente/views/Compras.vue'),
      meta:{
        nameRoute: 'Compras'
      }
    },
    {
      path: '',
      redirect: {name: 'cliente-home'}
    },
  ]
}