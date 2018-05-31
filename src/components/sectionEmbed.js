import {h, render, Component } from 'preact';

export class SectionEmbed extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(props) {
  };

  render(props, state) {

    const componentInlineStyle = {
      SectionEmbed: {
        width: props.width + 'px',
        maxWidth: props.width + 'px',
        height: props.height + 'px',
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      }
    };

    return h('iframe', {className: 'SectionEmbed', style: componentInlineStyle.SectionEmbed, src: props.targetUrl, frameborder: '0',allowfullscreen: 'true', mozallowfullscreen: 'true', webkitallowfullscreen: 'true'});

  };
};