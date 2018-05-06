import Router from 'preact-router';
import { h, render, Component } from 'preact';
import {Section} from '../components/section';
import {ContentArea} from '../components/contentArea';
import {Image} from '../components/image';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';

export const Home = (props) => {
	console.log('home redered')
	return ( 
		h('div', null,
			h(Section, {backgroundColor: '#ffffff', scrimHeight: '200'},
				h(ContentArea, {width: '800'},
					h('p', null, 'In October of 2017, Highspot had closed their B Round of funding and was closing in on an ever growing list of Fortune 500 clients. Unlike any other startup, the Highspot product was a mishmash of user experience patterns quickly implemented over time in a race to define a new market category. As a result when a major client made the request for the product to be WCAG 2.0 AA compliant, the task ahead would be met with many challenges.'),
				),
				h(ContentArea, {width: '1440'},
					h(Image, {image: 'Create Spot _MacBookPro.png'})
				)
			),
			h(Section, {backgroundColor: '#f5f5f5'},
				h(ContentArea, {width: '800', top: '48', bottom: '48'},
					h('h4', null, 'The Challenge'),
					h('h2', null, 'Make The Product Accessible Over The Next 9 Months'),
					h('p', null, 'Although members on the product team had been involved in accessibility efforts at past companies myself included, Highspot had never tackled a project of this scale. We first needed to familiarize ourselves with WCAG 2.0 AA compliance, the level of effort required along with industry standard techniques and best practices.'),
					h('p', null, 'Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible. Our high level goals were to answer:'),
					h('ol', null,
						h('li', null, 'What does it mean to be compliant?'),
						h('li', null, 'What is the current product compliance gap?'),
						h('li', null, 'What strategy should we implement to become compliant?​​​​​​​'),
					),
					h('h3', null, "My Role"),
					h('p', null, "I led the design of Highspot's accessibility project. I worked closely with product management and engineering to identify, design and implement all necessary accessibility updates."),
					h('p', null, "I was responsible for ensuring all designs met WCAG 2.0 AA compliance and documented as part of Highspot's style guide and component design system.") 
				)
			),
			h(Section, {backgroundColor: '#ffffff'},
				h(ContentArea, {width: '800', top: '48', bottom: '48'},
					h('h4', null, 'Kickoff'),
					h('h2', null, 'Highspot for Everyone'),
					h('p', null, "Before the project was too far alone, it was import to better understand and define the client's compliance expectations. We arranged a full day workshop at the client’s headquarters, where I led a discovery session with their compliance officer to learn first hand what accessibility meant to them."),
					h('p', null, "Compliance was defined as the core feature-set meeting WCAG 2.0 AA compliance within a year. This definition allowed us to cut system admin pages and additional power user tools from our initial scope. As a good faith commitment to our client and to help cement accessibility into Highspot's culture, we devised “Highspot for everyone”. This project code name was a play on words of Highspot’s company tagline “Highspot everywhere”."),
					h('h3', null, "What requirements need remediation?"),
					h('p', null, "The design team identified the current product compliance gap through an exhaustive internal audit of the product, using a combination of screen reader technology and browser accessibility tools. This approach helped us better understand the nuance of each accessibility requirement and gain more insight into required design changes."),
					h(Image, {image: 'WCAG 2.0 AA Requirement Heatmap.png', top: '24', bottom: '24'})
				) 
			),
			h(Section, {backgroundColor: '#ffffff'},
				h(ContentArea, {width: '800', top: '48', bottom: '48'},
					h('h4', null, 'The path forward'),
					h('h2', null, 'A Component Based Approach'),
					h('p', null, "Given the overlapping nature of many accessibility requirements within the product, it soon became apparent that the best way to remediate all WCAG 2.0 AA requirements in a repeatable and sustainable manner was to take a component based approach."),
					h('p', null, "To validate this strategy we chose components commonly found in dialogs and forms that failed our internal accessibility audit. The next stage of our project would involve defining design system foundations with new components pushing the product to feel more cohesive while ensuring new designs were not divorced from the current product's look and feel."),
					h(Image, {image: 'Adobe XD Component Stickersheet.png', top: '24', bottom: '24', targetUrl: 'https://xd.adobe.com/spec/aa9d6b3a-b880-4d15-6439-bf0cdf9f06ac-dcac/'})
				)	
			)
		)
	)
};




/*
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myImg").className = "slideUp";
    }
}*/


//export { Home }; 

/*
class Home extends Component {
	componentDidMount() {
		this.setState({ message:'Hello!' });
	}
	render(props, state) {
		return (
			h('div', {id:'app'},
				h(Header, { message: state.message }),
				h(Main)
			)
		);
	}
}
*/

/** Components can just be pure functions */
/*
const Header = (props) => {
	return h('header', null,
		h('h1', null, 'App'),
		props.message && h('h2', null, props.message)
	);
};
*/

/** Instead of JSX, use: h(type, props, ...children) */
/*
class Main extends Component {
	render() {
		const items = [1,2,3,4,5].map( (item) => (
			h('li', {id:item}, 'Item '+item)
		));
		return (
			h('main', null,
				h('ul', null, items)
			)
		);
	}
}


//render(h(Home), document.body);
*/
/*
const Test = (props) => {
	return h('p', null,"test2");
};

render(h(Test), document.getElementById('app'));*/