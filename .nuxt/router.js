import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05d145e1 = () => interopDefault(import('../pages/pageA/index.vue' /* webpackChunkName: "pages/pageA/index" */))
const _ca940ebc = () => interopDefault(import('../pages/pageB/index.vue' /* webpackChunkName: "pages/pageB/index" */))
const _2f9aab63 = () => interopDefault(import('../pages/pageC/index.vue' /* webpackChunkName: "pages/pageC/index" */))
const _074dbb8a = () => interopDefault(import('../pages/pageB/_id.vue' /* webpackChunkName: "pages/pageB/_id" */))
const _c8dbaaea = () => interopDefault(import('../pages/pageC/_id.vue' /* webpackChunkName: "pages/pageC/_id" */))
const _b86891c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pageA",
    component: _05d145e1,
    name: "pageA"
  }, {
    path: "/pageB",
    component: _ca940ebc,
    name: "pageB"
  }, {
    path: "/pageC",
    component: _2f9aab63,
    name: "pageC"
  }, {
    path: "/pageB/:id",
    component: _074dbb8a,
    name: "pageB-id"
  }, {
    path: "/pageC/:id",
    component: _c8dbaaea,
    name: "pageC-id"
  }, {
    path: "/",
    component: _b86891c4,
    name: "index"
  }, {
    path: "/pageCNew",
    component: _2f9aab63,
    name: "pageC"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
