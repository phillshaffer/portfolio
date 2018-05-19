import Router from 'preact-router';
import {h, render, Component} from 'preact';
import {SectionContent} from '../components/sectionContent';
import {Button} from '../components/button';

export class work extends Component {
  constructor(props) {
    super(props);
    this.getProjectsMaxColumns = this.getProjectsMaxColumns.bind(this);
  };

  componentDidMount(props) {
  };

  getProjectsMaxColumns(width) {

    if (width <= 400) {
      return '100%';
    }
    else if (width <= 600) {
      return '100%';
    }
    else if (width <= 900) {
      return '100%';
    }
    else if (width <= 1200) {
      return '100%';
    }
    else {
      return '100%';
    }

  };

  render(props, state) {

    const projectsArray = [
      {
        targetUrl: '/anAccessibilityInspiredDesignSystem',
        buttonColor: 'rgb(41, 141, 225)',
        title: 'An Accessibility Inspired Design System',
        subTitle: 'Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible.', 
        backgroundImage: 'AdobeXD_Component_Stickersheet.png', 
        backgroundColor: 'rgba(41, 141, 225, .8)', 
        selected: true
      },
      {
        targetUrl: '/newProject',
        buttonColor: 'rgb(41, 141, 225)',
        title: '1',
        subTitle: 'something',
        backgroundImage: 'AdobeXD_Component_Stickersheet.png', 
        backgroundColor: 'blue', 
        selected: false
      }
    ];

    const componentInlineStyle = {
      projects: {
      },
      projects__project: {
        width: this.getProjectsMaxColumns(this.props.viewportWidth),
        height: props.viewportHeight + 'px',
      }
    };

    const projects = projectsArray.map((project) => {

      return ( 
        h('article', {className: 'projects__project', style: Object.assign(componentInlineStyle.projects__project, {backgroundImage: "url('/images/" + project.backgroundImage + "')"})},
          h('div', {className: 'project__overlay', style:{backgroundColor: project.backgroundColor}},
            h(SectionContent, {width: '736'},
              h('h1', null, project.title),
              h('p', null, project.subTitle),
              h(Button, {color: project.buttonColor, buttonName: 'View Case Study', targetUrl: project.targetUrl})
            )
          )
        )
      )
    });

    return (
      h('section', {className: 'projects'}, projects)
    );
  };
};

