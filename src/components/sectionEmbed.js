import {h, render, Component } from 'preact';

export class SectionEmbed extends Component {
  constructor(props) {
    super(props);
    this.getSectionEmbedWidth = this.getSectionEmbedWidth.bind(this);
    this.setSectionEmbedWidth = this.setSectionEmbedWidth.bind(this);
  };

  componentDidMount() {
    let self = this;
    window.addEventListener("load", function () {
      self.setSectionEmbedWidth(self.getSectionEmbedWidth());
    }, false);
    window.addEventListener("resize", function () {
      self.setSectionEmbedWidth(self.getSectionEmbedWidth());
    }, false);
  };

  componentWillUnmount() {
    window.removeEventListener('load');
    window.removeEventListener('resize');
  };

  getSectionEmbedWidth() {
    let windowWidth = window.innerWidth;
    let width = this.props.width;
    let style = window.getComputedStyle(document.getElementsByTagName('html')[0]);
    let cssWidth = parseInt(style.getPropertyValue('--subSection-maxWidth'));
    let rightLeftPadding = parseInt(style.getPropertyValue('--subSection-paddingRight')) + parseInt(style.getPropertyValue('--subSection-paddingLeft'))

    //console.log(windowWidth + ' ' + width + ' ' + cssWidth + ' ' + rightLeftPadding)
    if (this.props.width) {
      if (width >= windowWidth) {
        return windowWidth - rightLeftPadding;
      }
      else {
        return width;
      }
    }
    
    if (cssWidth >= windowWidth) {
      this.SectionEmbed.style.setProperty('--subSection-paddingRight', '0px');
      this.SectionEmbed.style.setProperty('--subSection-paddingLeft', '0px');
      return windowWidth - rightLeftPadding;
    }
    else {
      return cssWidth;
    }

  }

  setSectionEmbedWidth(width) {
    this.SectionEmbed.style.setProperty('--subSection-maxWidth', width + 'px');
  }

  render(props, state) {

    const componentInlineStyle = {
      SectionEmbed: {
        height: this.getSectionEmbedWidth() * 10 / 16 + 'px',
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      }
    };

    return ( 
      h('div', {class: 'SectionEmbed', ref: div => this.SectionEmbed = div, style: componentInlineStyle.SectionEmbed},
        h('iframe', {src: props.targetUrl, frameborder: '0',allowfullscreen: 'true', mozallowfullscreen: 'true', webkitallowfullscreen: 'true',})
      )
    );
  };
};