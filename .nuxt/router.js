import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b947de16 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _4099838a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _fa78c546 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _abe38ebe = () => interopDefault(import('../pages/log-in.vue' /* webpackChunkName: "pages/log-in" */))
const _6cfe5ef6 = () => interopDefault(import('../pages/our-work.vue' /* webpackChunkName: "pages/our-work" */))
const _de9a45a6 = () => interopDefault(import('../pages/p-referral.vue' /* webpackChunkName: "pages/p-referral" */))
const _459a53fa = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _4c20ae76 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _0c8d2468 = () => interopDefault(import('../pages/scalable.vue' /* webpackChunkName: "pages/scalable" */))
const _0d62ed72 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _11fb898c = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _0a4f1c84 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _60515e4f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/404",
      component: _b947de16,
      name: "404"
    }, {
      path: "/about",
      component: _4099838a,
      name: "about"
    }, {
      path: "/contact",
      component: _fa78c546,
      name: "contact"
    }, {
      path: "/log-in",
      component: _abe38ebe,
      name: "log-in"
    }, {
      path: "/our-work",
      component: _6cfe5ef6,
      name: "our-work"
    }, {
      path: "/p-referral",
      component: _de9a45a6,
      name: "p-referral"
    }, {
      path: "/pricing",
      component: _459a53fa,
      name: "pricing"
    }, {
      path: "/privacy",
      component: _4c20ae76,
      name: "privacy"
    }, {
      path: "/scalable",
      component: _0c8d2468,
      name: "scalable"
    }, {
      path: "/service",
      component: _0d62ed72,
      name: "service"
    }, {
      path: "/support",
      component: _11fb898c,
      name: "support"
    }, {
      path: "/terms",
      component: _0a4f1c84,
      name: "terms"
    }, {
      path: "/",
      component: _60515e4f,
      name: "index"
    }],

    fallback: false
  })
}
