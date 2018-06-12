import {h, render, Component } from 'preact';

export class SectionMedia extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    if (this.props.width) {
      this.SectionMedia.style.setProperty('--subSection-maxWidth', this.props.width + 'px'); 
    }
  };

  render(props, state) {

    const componentInlineStyle = {
      SectionMedia: {
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      }
    };

    return h('div', {class: 'SectionMedia', ref: div => this.SectionMedia = div, style: componentInlineStyle.SectionMedia}, props.children);

  };
};