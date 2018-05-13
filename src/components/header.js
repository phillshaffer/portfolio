import {h, render, Component } from 'preact';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {headerDisplay: {position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)'}};
    this.getHeaderDisplay = this.getHeaderDisplay.bind(this);
    this.onScroll = this.onScroll.bind(this);
  };

  componentDidMount() {
    window.addEventListener("load", this.getHeaderDisplay, false);
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener("resize", this.getHeaderDisplay, false);
  };

  componentWillUnmount() {
    window.addEventListener("load", this.getHeaderDisplay, false);
    window.removeEventListener('scroll', this.onScroll, false);
    window.addEventListener("resize", this.getHeaderDisplay, false);
  };

  getHeaderDisplay () {
    let scrollPosition = window.scrollY;
    let mastheadHeight = window.innerHeight;

    if (scrollPosition <= mastheadHeight) {
      this.setState({headerDisplay: {position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)'}});
    }
    else if (scrollPosition > mastheadHeight) {
      this.setState({headerDisplay: {position: 'fixed', backgroundColor: 'rgba(255, 255, 255, .70)'}});
    }

  };

  onScroll() {
    let scrollPosition = window.scrollY;
    let mastheadHeight = window.innerHeight;
    console.log(this.header.height)
    if (scrollPosition <= mastheadHeight) {
      this.setState({headerDisplay: {position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 1)'}});
    }
    else if (scrollPosition > mastheadHeight && scrollPosition <= this.props.mastheadHeight + this.header.getBoundingClientRect().height) {
      this.setState({headerDisplay: {position: 'fixed', backgroundColor: 'rgba(255, 255, 255, .70)'}});
    }

  };

  render(props, state) {

    // const componentInlineStyle = {
    //   Header: {
    //     height: props.height + 'px'
    //   }
    // };

    return ( 
      h('header', {className: 'Header', style: Object.assign(state.headerDisplay), ref: header => this.header = header},
        h('h4', null, 'Phill Shaffer')
      )
    );
  };
};

// changes fixed header issues, refactor to combine duplicate logic.