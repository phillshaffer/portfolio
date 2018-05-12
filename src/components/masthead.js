import {h, render, Component } from 'preact';

export class Masthead extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(props) {
  };

  render(props, state) {
    
    const componentInlineStyle = {
      Masthead: {
        height: props.mastheadHeight + 'px',
        backgroundImage: 'url("./images/' + props.backgroundImage + '")'
      },
      Masthead__overlay: {
        backgroundColor: props.overlayBackgroundColor
      }
    };

    return (
      h('div', {className: 'Masthead', style: componentInlineStyle.Masthead},
        h('div', {className: 'Masthead__overlay', style: componentInlineStyle.Masthead__overlay}, props.children)
      )
    );
  };
};
