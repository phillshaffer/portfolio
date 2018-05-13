//'use strict';
import Router from 'preact-router';
import {h, render, Component } from 'preact';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Masthead} from './components/masthead';
import {Header} from './components/header';
import {Section} from './components/section';
import {SectionContent} from './components/sectionContent';
import {SectionMediaGallery} from './components/sectionMediaGallery';
import {SectionMedia} from './components/sectionMedia';
import {Image} from './components/image';

class Site extends Component {
  constructor(props) {
    super(props);
    this.state = ({viewportWidth: ' '});
    this.state = ({viewportHeight: ' '});
    this.getViewportSize = this.getViewportSize.bind(this);
  };

  componentDidMount(props) {
    window.addEventListener('load', this.getViewportSize, false);
    window.addEventListener('resize', this.getViewportSize, false);
  };

  componentWillUnmount() {
    window.removeEventListener('load', this.getViewportSize, false);
    window.addEventListener('resize', this.getViewportSize, false);
  };

  getViewportSize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    this.setState({viewportWidth: windowWidth});
    this.setState({viewportHeight: windowHeight});
  };

  render(props, state) {

    return (
      h('div', {className: 'Site'},
        h(Router, null,
          h(Home, {path: '/', viewportHeight: state.viewportHeight, viewportWidth: state.viewportWidth}),
          h(About, {path: '/about'})
        )
      )
    );
  };
};

render(h(Site), document.body);