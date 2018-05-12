import {h, render, Component } from 'preact';

export class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {componentHeight: ' '};
		this.state = {scrimDisplay: 'none'};
		this.state = {scrimPosition: ' '};
		this.state = {scrimBackgroundColor: ' '};
		this.onScroll = this.onScroll.bind(this);
	}
	
	componentDidMount(props) {
		let self = this;
		
		window.addEventListener("load", function () {
			self.setScrimPosition(self.getScrimPosition(self.setComponentHeight(self.getComponentHeight()), self.props.scrimHeight))
		}, false);
		window.addEventListener("scroll", this.onScroll, false);
		window.addEventListener("resize", function () {
			self.setScrimPosition(self.getScrimPosition(self.setComponentHeight(self.getComponentHeight()), self.props.scrimHeight))
		}, false);

	};

	componentWillUnmount() {
		window.removeEventListener('load');
		window.removeEventListener('scroll', this.onScroll, false);
		window.removeEventListener('resize');
  };

	onScroll() {
		let scrollPosition = window.scrollY;
		const componentPosition = this.section.getBoundingClientRect().y + scrollPosition;
		let componentScrollPosition = this.getComponentScrollPosition(scrollPosition, componentPosition);

		if (scrollPosition > componentPosition && scrollPosition < componentPosition + this.state.componentHeight) {
			if(componentScrollPosition > this.state.scrimPosition) {
				this.setState({scrimDisplay: 'block'});
				this.setState({scrimBackgroundColor: 'rgba(120, 120, 120, ' + this.getScrimOpacity(componentScrollPosition, this.state.scrimPosition, this.props.scrimHeight) + ')'});
			}
			else if(componentScrollPosition < this.state.scrimPosition) {
				this.setState({scrimDisplay: 'none'});
			}
		}

	};

	getComponentHeight() {
		let componentHeight = this.section.offsetHeight;
		return componentHeight;
	};

	setComponentHeight(componentHeight) {
		this.setState({componentHeight: componentHeight});
		return componentHeight;
	};

	getScrimPosition(componentHeight, offset) {
		let scrimPosition =  componentHeight - offset;
		return scrimPosition;
	};

	setScrimPosition(scrimPosition) {
		this.setState({scrimPosition: scrimPosition});
		return scrimPosition;
	};

	getComponentScrollPosition(scrollPosition, componentPosition) {
		let componentScrollPosition =  scrollPosition - componentPosition;
		return componentScrollPosition;
	}

	getScrimOpacity(componentScrollPosition, scrimPosition, scrimHeight) {	
		let opacity = (componentScrollPosition - scrimPosition) / scrimHeight;
		return opacity;
	}
	
	render(props, state) {

    const componentInlineStyle = {
      Section: {
        backgroundColor: props.backgroundColor
			},
			Section__scrim: {
				display: state.scrimDisplay,
				top: state.scrimPosition + 'px',
				height: props.scrimHeight + 'px',
				backgroundColor: state.scrimBackgroundColor
			}
    };

		return ( 
			h('section', {className: 'Section', ref: section => this.section = section, style: componentInlineStyle.Section}, props.children,
				h('div', {className: 'Section__scrim', style: componentInlineStyle.Section__scrim})
			)
		);
	};
};