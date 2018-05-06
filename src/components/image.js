import { h, render, Component } from 'preact';

export class Image extends Component {
	constructor(props) {
		super(props);
		this.openTargetURL = this.openTargetURL.bind(this);
	}
	
	componentDidMount(props) {

	}

	openTargetURL(targetURL) {
		window.open(targetURL)
	}

	render(props, state) {
		
		const style = {
			'max-width': '100%',
			'height': 'auto',
			'margin-top': props.top + 'px',
			'margin-bottom': props.bottom + 'px'
		}

		//return h('img', {src: './images/' + props.image, style: style, onClick: this.openTargetURL(props.targetUrl)})
		return h('img', {src: './images/' + props.image, style: style})

	}
}