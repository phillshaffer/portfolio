import {h, render, Component } from 'preact';

export class ContentArea extends Component {
	constructor(props) {
		super(props);
	};
	
	componentDidMount(props) {
	};

	render(props, state) {
		
		const componentInlineStyle = {
      ContentArea: {
				maxWidth: props.width + 'px',
				marginTop: props.top + 'px',
				marginBottom: props.bottom + 'px'
      }
		};

		return h('div', {className: 'ContentArea', style: componentInlineStyle.ContentArea}, props.children);
		
	};
};