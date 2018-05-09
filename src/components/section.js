import {h, render, Component } from 'preact';

export class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {componentHeight: ' '}
		this.state = {scrimDisplay: 'none'}
		this.state = {scrimPosition: ' '}
		this.state = {scrimBackgroundColor: ' '}
		this.onScroll = this.onScroll.bind(this)
	}
	
	componentDidMount(props) {
		let self = this
		
		window.addEventListener("load", function () {
			self.setScrimPosition(self.getScrimPosition(self.setComponentHeight(self.getComponentHeight()), self.props.scrimHeight))
		}, false)
		window.addEventListener("scroll", this.onScroll, false)
		window.addEventListener("resize", function () {
			self.setScrimPosition(self.getScrimPosition(self.setComponentHeight(self.getComponentHeight()), self.props.scrimHeight))
		}, false)

	}

	componentWillUnmount() {
		window.removeEventListener('load');
		window.removeEventListener('scroll', this.onScroll, false);
		window.removeEventListener('resize');
  }

	onScroll() {
		console.log('here')
		let scrollPosition = window.scrollY
		const componentPosition = this.section.getBoundingClientRect().y + scrollPosition
		let componentScrollPosition = this.getComponentScrollPosition(scrollPosition, componentPosition)

		if (scrollPosition > componentPosition && scrollPosition < componentPosition + this.state.componentHeight) {
			if(componentScrollPosition > this.state.scrimPosition) {
				this.setState({scrimDisplay: 'block'})
				this.setState({scrimBackgroundColor: 'rgba(120, 120, 120, ' + this.getScrimOpacity(componentScrollPosition, this.state.scrimPosition, this.props.scrimHeight) + ')'})
			}
			else if(componentScrollPosition < this.state.scrimPosition) {
				this.setState({scrimDisplay: 'none'})
			}
		}
	}

	getComponentHeight() {
		let componentHeight = this.section.offsetHeight
		return componentHeight
	}

	getScrimPosition(componentHeight, offset) {
		let overlayPosition =  componentHeight - offset
		return overlayPosition
	}

	setComponentHeight(componentHeight) {
		this.setState({componentHeight: componentHeight})
		return componentHeight
	}

	setScrimPosition(overlayPosition) {
		this.setState({scrimPosition: overlayPosition})
		return overlayPosition
	}

	getComponentScrollPosition(scrollPosition, componentPosition) {
		let componentScrollPosition =  scrollPosition - componentPosition
		return componentScrollPosition
	}

	getScrimOpacity(componentScrollPosition, scrimPosition, scrimHeight) {	
		let opacity = (componentScrollPosition - scrimPosition) / scrimHeight
		return opacity
	}
	
	render(props, state) {

		const style = {
			'position': 'relative',
			'height': 'auto',
			'display': 'flex',
			'flex-direction': 'column',
			'align-items': 'center',
			'background-color': props.backgroundColor
		}

		const scrimStyle = {
			'display': state.scrimDisplay,
			'position': 'absolute',
			'top': state.scrimPosition + 'px',
			'width': '100%',
			'height': props.scrimHeight + 'px',
			'background-color': state.scrimBackgroundColor,
			'z-index': '2'
		}

		console.log('section rendered')
		return h('section', {ref: section => this.section = section, style: style}, props.children,
			h('div', {id: 'scrim', style: scrimStyle})
		)
	}
}