import {h, render, Component } from 'preact';

export class SectionContent extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(props) {
  };

  render(props, state) {

    const componentInlineStyle = {
      SectionContent: {
        maxWidth: props.width + 'px',
        marginTop: props.top + 'rem', // overrides default defined in SectionConent css class
        marginBottom: props.bottom + 'rem' // overrides default defined in SectionConent css class
      }
    };

    return h('div', {className: 'SectionContent', style: componentInlineStyle.SectionContent}, props.children);

  };
};