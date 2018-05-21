//'use strict';
import {h, render, Component} from 'preact';
import Router from 'preact-router';
import {Link} from 'preact-router/match';
import {work} from './pages/work';
import {anAccessibilityInspiredDesignSystem} from './pages/anAccessibilityInspiredDesignSystem';
import {adCreativeExtendedToNativeSocialAdPlatforms} from './pages/adCreativeExtendedToNativeSocialAdPlatforms';
import {Redirect} from './components/redirect';
import {Masthead} from './components/masthead';
import {Header} from './components/header';
import {Section} from './components/section';
import {SectionContent} from './components/sectionContent';
import {SectionMediaGallery} from './components/sectionMediaGallery';
import {SectionMedia} from './components/sectionMedia';
import {Image} from './components/image';
import {Button} from './components/button';

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
          h(Redirect, {path: '/', to: '/work'}),
          h(work, {path: '/work', viewportHeight: state.viewportHeight, viewportWidth: state.viewportWidth}),
          h(anAccessibilityInspiredDesignSystem, {path: '/an_accessibility_inspired_design_system', viewportHeight: state.viewportHeight, viewportWidth: state.viewportWidth}),
          h(adCreativeExtendedToNativeSocialAdPlatforms, {path: '/ad_creativeext_ended_to_native_social_ad_platforms', viewportHeight: state.viewportHeight, viewportWidth: state.viewportWidth})
        )
      )
    );
  };
};

render(h(Site), document.body);