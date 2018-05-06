//'use strict';
import Router from 'preact-router';
import { h, render, Component } from 'preact';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Section} from './components/section';
import {ContentArea} from './components/contentArea';
import {Image} from './components/image';
//import {test} from './test';

//test();


//const App = (props) => {
class App extends Component {
	constructor(props) {
		super(props);
	}

	render(props, state) {
		console.log('app redered')
		return h(Router, null,
			h(Home, {path: '/'}),
			h(About, {path: '/about'})
		)
	}
};


render(h(App), document.body);