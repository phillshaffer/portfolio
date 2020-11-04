import {h, render, Component } from 'preact';

export class SectionContent extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    if (this.props.width) {
      this.SectionContent.style.setProperty('--subSection-maxWidth', this.props.width + 'px'); 
    }
  };

  render(props, state) {

    const componentInlineStyle = {
      SectionContent: {
        'margin-top': props.top + 'rem',
        'margin-bottom': props.bottom + 'rem'
      }
    };

    return h('div', {class: 'SectionContent', ref: div => this.SectionContent = div, style: componentInlineStyle.SectionContent}, props.children);

  };
};