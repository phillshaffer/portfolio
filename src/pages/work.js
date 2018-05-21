import {h, render, Component} from 'preact';
import Router from 'preact-router';
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
        targetUrl: '/an_accessibility_inspired_design_system',
        buttonColor: 'rgb(41, 141, 225)',
        title: 'An Accessibility Inspired Design System',
        subTitle: 'Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible.', 
        backgroundImage: 'AdobeXD_Component_Stickersheet.png', 
        backgroundColor: 'rgba(41, 141, 225, .8)', 
        selected: true
      },
      {
        targetUrl: '/ad_creativeext_ended_to_native_social_ad_platforms',
        buttonColor: 'rgb(36, 56, 94)',
        title: 'Ad Creative Extended to Native Social Ad Platforms',
        subTitle: 'Over the coming months, our goal was to standardize our approach to ad creative, improve ad creative storage and access, and design the company’s first mobile app.',
        backgroundImage: 'ThunderAdFrameworkSchema.png', 
        backgroundColor: 'rgba(36, 56, 94, .9)', 
        selected: false
      }
    ];

    const componentInlineStyle = {
      projects: {
      },
      projects__project: {
        width: this.getProjectsMaxColumns(this.props.viewportWidth),
        height: props.viewportHeight + 'px'
      }
    };

    const projects = projectsArray.map((project) => {
      //console.log(Object.assign(componentInlineStyle.projects__project, {backgroundImage: "url('/images/" + project.backgroundImage + "')"}));
      return ( 
        h('article', {className: 'projects__project', style: Object.assign({backgroundImage: "url('/images/" + project.backgroundImage + "')"}, componentInlineStyle.projects__project)},
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
    console.log(projects)
    return (
      h('section', {className: 'projects'}, projects)
    );
  };
};

