import {h, render, Component } from 'preact';

export class Image extends Component {
	constructor(props) {
		super(props);
		this.openTargetUrl = this.openTargetUrl.bind(this);
	}

	openTargetUrl(targetUrl) {
		window.open(targetUrl)
	}

	render(props, state) {

    const componentInlineStyle = {
      Image: {
				marginTop: props.top + 'px',
				marginBottom: props.bottom + 'px'
      }
    }

		return h('img', {className: 'Image', style: componentInlineStyle.Image, src: './images/' + props.image, onClick:
			targetUrl => {
				if (props.targetUrl) {
					this.openTargetUrl(this.props.targetUrl)
				}
				else {
					return null;
				}
			}
		});
	};
};