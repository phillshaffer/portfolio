import {h, render, Component } from 'preact';

export class SectionEmbed extends Component {
  constructor(props) {
    super(props);
    this.getWidth = this.getWidth.bind(this);
  };

  componentDidMount(props) {
  };

  getWidth() {
    let viewportWidth = this.props.width;
    if (viewportWidth > 736) { 
      return 736;
    }
    else {
      return viewportWidth - 32;
    }
  }

  render(props, state) {

    const componentInlineStyle = {
      SectionEmbed: {
        width: this.getWidth() + 'px',
        height: this.getWidth() * 10 / 16 + 'px',
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      }
    };

    return ( 
      h('div', {className: 'SectionEmbed', style: componentInlineStyle.SectionEmbed},
        h('iframe', {src: props.targetUrl, frameborder: '0',allowfullscreen: 'true', mozallowfullscreen: 'true', webkitallowfullscreen: 'true'})
      )
    );
  };
};