debugger
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-demo',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'element-ui/lib/theme-chalk/index.css'
	],
	env: {
    	baseUrl: 'http://0.0.0.0:3005'
	},
	server: {
		port: 3005, // default: 3000
		host: '0.0.0.0', // default: localhost,
		timing: false
	},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/element-ui',
		'@/plugins/i18n.js',
	],
	router: {
		middleware: 'redirect',
		extendRoutes(routes, resolve) {
		routes.push({
        name: 'pageC',
        path: '/pageCNew',
        component: resolve(__dirname, 'pages/pageC/index.vue')
		});
		routes.push({
        name: 'pageCNew-id',
        path: '/pageCNew/:id', 
        component: resolve(__dirname, 'pages/pageC/_id.vue'),
		});
		routes.push({
        name: 'pageCNew_function',
        path: '/pageCNew_function', 
        component: resolve(__dirname, 'pages/pageC/function.vue'),
        
		});
      //nuxt 里面的'-'与'/'一样，所以刷新页面的时候就把它给变成‘/’,想用‘-’的话就在middleware里面重定向一下或者是301跳转，见/Users/cyn/Work/practices/github-nuxt-demo/-nuxt-demo/pages/pageC/function.vue
      
			// routes.push({
      //   name: 'pageC-function',
      //   path: '/pageC-function', 
      //   component: resolve(__dirname, 'pages/pageC/function.vue'),
        
      // });
		}
	},

  // Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

  // Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

  // Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	transpile: [/^element-ui/],
	}
}
