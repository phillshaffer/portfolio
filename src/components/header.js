import {h, render, Component } from 'preact';

export class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {headerDisplay: {position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)'}};
    this.onScroll = this.onScroll.bind(this);
	};
	
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  onScroll() {
    let scrollPosition = window.scrollY;
    let mastheadHeight = window.innerHeight;
    
    if (scrollPosition <= mastheadHeight) {
      this.setState({headerDisplay: {position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)'}});
    }
    else if (scrollPosition > mastheadHeight && scrollPosition <= this.props.mastheadHeight + this.props.height) {
      this.setState({headerDisplay: {position: 'fixed', backgroundColor: 'rgba(255, 255, 255, .70)'}});
    }

  };

	render(props, state) {
    
    const componentInlineStyle = {
      Header: {
        height: props.height + 'px'
      }
    }

    return ( 
      h('header', {className: 'Header', style: Object.assign(componentInlineStyle.Header, state.headerDisplay)},
        h('h4', null, 'Phill Shaffer')
      )
    );
	};
};