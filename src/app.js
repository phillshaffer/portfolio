//'use strict';
import Router from 'preact-router';
import {h, render, Component } from 'preact';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Masthead} from './components/masthead';
import {Header} from './components/header';
import {Section} from './components/section';
import {ContentArea} from './components/contentArea';
import {Image} from './components/image';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = ({viewportHeight: ' '})
		this.getWindowHeight = this.getWindowHeight.bind(this)
	}

	componentDidMount(props) {
		window.addEventListener('load', this.getWindowHeight, false);
		window.addEventListener('resize', this.getWindowHeight, false);
  }

  componentWillUnmount() {
		window.removeEventListener('load', this.getWindowHeight, false);
		window.addEventListener('resize', this.getWindowHeight, false);
  }

  getWindowHeight() {
		let windowHeight = window.innerHeight;
		console.log(windowHeight)
    this.setState({viewportHeight: windowHeight})
  }

	render(props, state) {
		console.log('app redered')
		
		const style = {
			'position': 'absolute',
			'height': '100%',
    	'width': '100%'
		}
		
		return (
			h('div', {id: 'app', style: style},
				h(Router, null,
					h(Home, {path: '/', viewportHeight: state.viewportHeight}),
					h(About, {path: '/about'})
				)
			)
		)
	}
}


render(h(App), document.body);