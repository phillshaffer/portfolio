import Router from 'preact-router';
import {h, render, Component} from 'preact';
import {SectionContent} from '../components/sectionContent';

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
      return '50%';
    }

  };

  render(props, state) {

    const projectsArray = [
      {
        title: '1', 
        backgroundImage: 'AdobeXD_Component_Stickersheet.png', 
        backgroundColor: 'blue', 
        selected: false
      },
      {
        title: 'An Accessibility Inspired Design System',
        subTitle: 'Developed to meet the accessibility needs of all users.', 
        backgroundImage: 'AdobeXD_Component_Stickersheet.png', 
        backgroundColor: 'rgba(41, 141, 225, .8)', 
        selected: true
      }//,
      // {
      //   title: '3', 
      //   backgroundImage: null, 
      //   backgroundColor: 'red', 
      //   selected: false
      // }
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
            h(SectionContent, null,
              h('h2', null, project.title),
              h('p', null, project.subTitle)
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

