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
      //'height': '500px',
      'width': '100%',
      'position': 'fixed',
      'background-color': 'blue',
      'z-index': '-99',
      'top': '0px'
    }

    return (
      h('div', {id: 'masthead', style: style}, 'masthead')
    )
  }
}