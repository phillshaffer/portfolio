import {h, render, Component } from 'preact';

export class Masthead extends Component {
	constructor(props) {
    super(props);
	}
	
	componentDidMount(props) {
  } 

	render(props, state) {
    
    const style = {
      'height': props.mastheadHeight + 'px',
      'width': '100%',
      'position': 'fixed',
      'top': '0',
      'z-index': '-99',
      'background-image': 'url("./images/' + props.backgroundImage + '")',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }

    const overlayStyle = {
      'position': 'absolute',
      'top': '0',
      'width': '100%',
      'height': '100%',
      'display': 'flex',
			'flex-direction': 'column',
			'align-items': 'center',
      'background-color': props.overlayBackgroundColor
    }

    return (
      h('div', {id: 'masthead', style: style},
        h('div', {id: 'overlay', style: overlayStyle}, props.children)
      )
    )
  }
}