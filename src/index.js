import 'babel-polyfill'
import Vue from 'vue'

import App from './App'

new Vue({
	el: '#app',
	components: { App },
	template: '<app />'
})