import {h, render, Component } from 'preact';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.openTargetUrl = this.openTargetUrl.bind(this);
  }

  openTargetUrl(targetUrl) {
    window.open(targetUrl, '_self')
  }

  render(props, state) {

    const componentInlineStyle = {
      Button: {
        color: props.color
      }
    };

    return h('button', {className: 'Button', style: componentInlineStyle.Button, onClick:
      targetUrl => {
        if (props.targetUrl) {
          this.openTargetUrl(this.props.targetUrl)
        }
        else {
          return null;
        }
      }
    }, props.buttonName
    );
  };
};