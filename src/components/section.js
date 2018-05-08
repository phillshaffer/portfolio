import {h, render, Component } from 'preact';

export class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {componentHeight: ' '}
		this.state = {scrimDisplay: ' '}
		this.state = {scrimPosition: ' '}
		this.state = {scrimBackgroundColor: ' '}
	}
	
	componentDidMount(props) {
		let self = this

		window.addEventListener("load", function(event) {
			let componentHeight = self.section.offsetHeight
			self.setState({componentHeight: componentHeight})
			self.setState({scrimPosition: self.getOverlayPosition(componentHeight, self.props.scrimHeight)})
		})

		window.addEventListener("scroll", function(event) {
			let scrollPosition = this.scrollY
			const componentHeight = self.state.componentHeight
			const componentPosition = self.section.getBoundingClientRect().y + scrollPosition
			const scrimPosition = self.getOverlayPosition(componentHeight, self.props.scrimHeight)
			let componentScrollPosition = self.getComponentScrollPosition(scrollPosition, componentPosition)
			
			if (scrollPosition > componentPosition && scrollPosition < componentPosition + componentHeight) {
				if(componentScrollPosition > self.state.scrimPosition) {
					self.setState({scrimDisplay: 'block'})
					self.setState({scrimBackgroundColor: 'rgba(120, 120, 120, ' + self.getOverlayOpacity(componentScrollPosition, scrimPosition, self.props.scrimHeight) + ')'})
				}
				else if(componentScrollPosition < self.state.scrimPosition) {
					self.setState({scrimDisplay: 'none'})
				}
			}
		})

		window.addEventListener('resize', function() {
			self.section.style.height = 'auto'
			let componentHeight = self.section.offsetHeight
			self.setState({componentHeight: componentHeight})
			self.setState({scrimPosition: self.getOverlayPosition(componentHeight, self.props.scrimHeight)})
		})
	}

	getComponentScrollPosition(scrollPosition, componentPosition) {
		let componentScrollPosition =  scrollPosition - componentPosition
		return componentScrollPosition
	}

	getOverlayPosition(componentHeight, offset) {
		let componentOverlayPosition =  componentHeight - offset
		return componentOverlayPosition
	}

	getOverlayOpacity(componentScrollPosition, scrimPosition, scrimHeight) {	
		let opacity = (componentScrollPosition - scrimPosition) / scrimHeight
		return opacity
	}
	
	render(props, state) {
		
		const style = {
			'position': 'relative',
			'height': state.componentHeight + 'px',
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