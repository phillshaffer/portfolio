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

class Site extends Component {
	constructor(props) {
		super(props);
		this.state = ({viewportHeight: ' '})
		this.getWindowHeight = this.getWindowHeight.bind(this)
	};

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
    this.setState({viewportHeight: windowHeight});
  };

	render(props, state) {
		
		return (
			h('div', {className: 'Site'},
				h(Router, null,
					h(Home, {path: '/', viewportHeight: state.viewportHeight}),
					h(About, {path: '/about'})
				)
			)
		);
	};
};

render(h(Site), document.body);