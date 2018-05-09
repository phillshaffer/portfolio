import {h, render, Component } from 'preact';

export class ContentArea extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(props) {
	}

	render(props, state) {
		
		const style = {
      'max-width': props.width + 'px',
      'display': 'flex',
			'flex-direction': 'column',
      'align-items': 'flex-start',
      'padding': '0px 16px 0px 16px',
			'margin-top': props.top + 'px',
			'margin-bottom': props.bottom + 'px'
		}

		return h('div', {id: 'contentArea', style: style}, props.children)
	}
}