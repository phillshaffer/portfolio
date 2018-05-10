import {h, render, Component } from 'preact';

export class Image extends Component {
	constructor(props) {
		super(props);
		this.openTargetURL = this.openTargetURL.bind(this);
	}
	
	componentDidMount(props) {
	}

	openTargetURL() {
		window.open(this.props.targetUrl)
	}

	render(props, state) {
		
		const style = {
			'max-width': '100%',
			'height': 'auto',
			'margin-top': props.top + 'px',
			'margin-bottom': props.bottom + 'px'
		}

		return h('img', {src: './images/' + props.image, style: style, onClick: this.openTargetURL})
		//add bit here to have overlay option that says click here if there is a targetURL, currently a bug that opens blank for all images

	}
}