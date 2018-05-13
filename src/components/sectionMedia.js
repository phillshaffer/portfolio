import {h, render, Component } from 'preact';

export class SectionMedia extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(props) {
  };

  render(props, state) {

    const componentInlineStyle = {
      SectionMedia: {
        maxWidth: props.width + 'px',
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      }
    };

    return h('div', {className: 'SectionMedia', style: componentInlineStyle.SectionMedia}, props.children);

  };
};