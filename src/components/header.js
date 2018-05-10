import {h, render, Component } from 'preact';

export class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {headerDisplaySticky: false}
    this.onScroll = this.onScroll.bind(this)
	}
	
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    let scrollPosition = window.scrollY
    let mastheadHeight = window.innerHeight;
    if (scrollPosition < mastheadHeight) {
      this.setState({headerDisplaySticky: false})
    }
    if (scrollPosition > this.props.mastheadHeight && scrollPosition < this.props.mastheadHeight + this.props.height) {
      this.setState({headerDisplaySticky: true})
    }
      
  }

	render(props, state) {
    
    const style = {
      'display': 'flex',
      'align-items': 'center',
      'height': props.height + 'px',
      'width': '100%',
      'padding-left': '16px',
      'background-color': 'rgba(255, 255, 255, 1)'
    }

    const styleSticky = {
      'position': 'fixed',
      'display': 'flex',
      'align-items': 'center',
      'height': props.height + 'px',
      'width': '100%',
      'top': '0px',
      'padding-left': '16px',
      'z-index': '1000',
      'background-color': 'rgba(255, 255, 255, .70)'
    }

    console.log('header rendered')

    if (state.headerDisplaySticky) {
      return h('header', {style: styleSticky},
        h('h4', null, 'Phill Shaffer')
      )
    }
    else {
      return h('header', {style: style},
        h('h4', null, 'Phill Shaffer')
      )
    }

	}
}