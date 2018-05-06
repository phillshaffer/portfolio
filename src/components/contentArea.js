import { h, render, Component } from 'preact';

export class ContentArea extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(props) {

	}

	render(props, state) {
		
		const style = {
      'width': '100%',
      'max-width': props.width + 'px',
      'display': 'flex',
			'flex-direction': 'column',
      'align-items': 'flex-start',
			'margin-top': props.top + 'px',
			'margin-bottom': props.bottom + 'px'
		}

		return h('div', {id: 'contentArea', style: style}, props.children)
	}
}