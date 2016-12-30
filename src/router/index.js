import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
	
	routes:[
    	{ path: '/', component: require('../components/Hello.vue') },
    	{ path: '/index', component: require('../components/testtt.vue') },
    	{ path: '/hello', component: require('../components/Hello.vue') },
		{path: '/test' ,component: require('../components/test.vue')},
		{path: '/testtt' ,component: require('../components/testtt.vue')},
    	{ path: '/counter', component: require('../components/Counter.vue')},
    	{ path: '/counter-hot', component: require('../components/vuextest/Counter.vue')}
  	]
})


export default router;
