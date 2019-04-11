import { h, render, Component, createRef, forwardRef } from 'preact'
import CTA from './components/CTA'
import Modal from './components/Modal'
import Slideshow from './components/Slideshow'
import Sidebar from './components/Sidebar'
import HamburgerOverlay from './components/HamburgerOverlay'
import CopyText from './components/CopyText'
import React from 'preact-compat';
import styled from 'styled-components';
import ReactPlayer from 'react-player'
// import { Controller, Scene } from 'react-scrollmagic';
// var scrollIntoView = require('scroll-into-view');
import ReactFullpage from '@fullpage/react-fullpage';


// import introJSON from './api/SlideData'
// import introJSON from '../SlideData.json'
// import * as introJSON from '../../SlideData.json'

// import Marvel from '../assets/images/netflix-marvel-text.png'
var data = require('./data/Hero.json')
var data2 = require('./data/Section_1.json')
var data3 = require('./data/Section_2.json')
var data4 = require('./data/Section_3.json')
var data5 = require('./data/Section_4.json')
var data6 = require('./data/Section_5.json')
var data7 = require('./data/Section_6.json')
var data8 = require('./data/Section_7.json')
var data9 = require('./data/TheLastSection.json')


const anchors =  ['section1', 'section2', 'section3','section4', 'section5', 'section6', 'section7','section8', 'section9'];

 
class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isOpened: true,
			show: false
		}
		// this.heroRef = createRef();
		this.section1ref = createRef();
		this.section2ref = createRef();
		this.section3ref = createRef();
		this.section4ref = createRef();
		this.section5ref = createRef();
		this.section6ref = createRef();
		this.section7ref = createRef();
		this.section8ref = createRef();
		this.section9ref = createRef();
		// this.lastSectionref = createRef();
		this.clickHamburger = this.clickHamburger.bind(this);
		;
	

	}

	clickHamburger = () => {
		console.log('HAMBURGER CLICKED!')
		this.setState({ isOpened: !this.state.isOpened})

	};

	clickToSection = (currentRef) => {
		console.log('CLICKED TO SECTION!')
		if(currentRef){
            currentRef.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	
	showModal = () => {
		console.log('SHOW MODAL')
		this.setState(
			{show: true, 
			}
			);
		document.documentElement.style.overflow = 'hidden';
   document.body.scroll = "no";

	};
	hideModal = () => {
		console.log('HIDE MODAL')
		this.setState(
			{show: false,
				}
			);
		document.documentElement.style.overflow = 'scroll';
 document.body.scroll = "yes";
 ReactPlayer.pause()
	}
	
	
	render(props, states) {
		
		return (
			<div id='app'>
			<Modal show={this.state.show} handleClose={this.hideModal} > 
		       
 			<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%'
          height='100%' />
		
	        </Modal> 
			
			<img className='red-logo' src='assets/images/REDproduction.png'/>
			 <div id='hamburger' onClick={this.clickHamburger}>
					 
					  { this.state.isOpened ? <img className='hamburger-icon' src='assets/images/hamburger.png'/> : <img className='X-icon' src='assets/images/X.png'/> }
				</div>

			<div className='divider-line'style={{display: this.state.isOpened ? 'block' : 'none' }} ></div>
			<div className="sidebar-container">
				
				<div className='circles' style={{display: this.state.isOpened ? 'block' : 'none' }}>
					{/*<img className='circle-1' src='assets/images/circle1.png' onClick={() => this.clickToSection(this.section1ref.current)} data-menuanchor='section1'/>*/}
					<img className='circle-1' src='assets/images/circle1.png' onClick={() => this.clickToSection(this.section2ref.current)} data-menuanchor='section2'/>
					<img className='circle-2' src='assets/images/circle2.png' onClick={() => this.clickToSection(this.section3ref.current)} data-menuanchor='section3'/>
					<img className='circle-3' src='assets/images/circle3.png' onClick={() => this.clickToSection(this.section4ref.current)} data-menuanchor='section4'/>
					<img className='circle-4' src='assets/images/circle4.png' onClick={() => this.clickToSection(this.section5ref.current)} data-menuanchor='section5'/>
					<img className='circle-5' src='assets/images/circle5.png' onClick={() => this.clickToSection(this.section6ref.current)} data-menuanchor='section6'/>
					<img className='circle-6' src='assets/images/circle6.png' onClick={() => this.clickToSection(this.section7ref.current)} data-menuanchor='section7'/>
					<img className='circle-7' src='assets/images/circle7.png' onClick={() => this.clickToSection(this.section8ref.current)} data-menuanchor='section8'/>
					{/*<img className='circle-7' src='assets/images/circle7.png' onClick={() => this.clickToSection(this.section9ref.current)} data-menuanchor='section9'/>*/}
				</div>
				<div id='mouse' onClick={() => this.clickToSection(this.section1ref.current)} style={{display: this.state.isOpened ? 'block' : 'none' }}>
					 <img className='mouse-icon' src='assets/images/mouse.png'/>
				</div>
			</div>

			{ this.state.isOpened ? 
				// <ReactFullpage 
				// anchors={anchors}

    // 			render={({ state, fullpageApi }) => {
    // 				console.log('STATE', state)
    // 				console.log('FULLPAGEAPI', fullpageApi)
    // 				return(
			 // <ReactFullpage.Wrapper >
      		

     		<div className='content-container'>
     		
			<div className='section' ref={this.section1ref} data-anchor='section1'>
				<CopyText  headline='Ads with impact.' subheadline="For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting."/>
				
				<Slideshow content={data} cycleSpeed={3000} />
				{/*<img src={Marvel} />*/}
			</div>
			
			<div className='section' ref={this.section2ref} data-anchor='section2'>
				<CopyText headline='20 years at the forefront of digital advertising' subheadline="In 1999, while people were still using dial-up to surf the Net, we were owing the banner game." />

				<Slideshow content={data2} cycleSpeed={3000} />
			</div>
				
			<div className='section' ref={this.section3ref} data-anchor='section3'>

				<CopyText headline="0.5 seconds is the average time spend on a social ad. We've got that beat." subheadline="Our mission: stop the scroll. Whether they're planned weeks in advance or bult on the fly, our social ads stand out in a feed."/>
				
				<Slideshow content={data3} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section4ref} data-anchor='section4'>
			<CTA  word='DISCOVER VELVET'/>
			 	<CopyText headline="13x. That's how much faster we work." subheadline="We've developed in-house ad tech that creates dynamic campaigns, at scale, and much faster than conventional production methods. Including a product called Velvet - our favorite toy."/>
				
				<Slideshow content={data4} cycleSpeed={3000} />
				
			</div>
		
			<div className='section' ref={this.section5ref} data-anchor='section5'>
			 	<CopyText headline="100% of our code is open-source, self-compiling, and compatible with all networks." subheadline="So it just, you know... works." />
				 
				<Slideshow content={data5} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section6ref} data-anchor='section6'>
			 	<CopyText headline="6 partners consult with us about how to make their platforms work better." subheadline="You may have heard of them." />
				
				<Slideshow content={data6} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section7ref} data-anchor='section7'>
			 	<CopyText headline="100% of our in-house team knows the platforms inside and out." subheadline="We've got project managers who know the tech like they coded it. Developers with backgrounds in design and animation.  A company-wide expertise in all things social.  We can build what you need, but we can also advise on how to get the most out of every platform." />
				
				<Slideshow content={data7} cycleSpeed={3000} />
			</div>
		
			<div className='section' ref={this.section8ref} data-anchor='section8'>
			<CTA word='LATEST WORK' onClick={this.showModal} />
			
			
			 	<CopyText headline="Tons of happy clients use our skills every day." subheadline="They're too many to count. But they include some big names in sports, streaming entertainment, and beverage - and one kinda famous mouse."/>
				 
				<Slideshow content={data8} cycleSpeed={3000} />
				
			</div>
			
			<div className='section' ref={this.section9ref} data-anchor='section9'>
			 <CopyText headline="Give us a test project." subheadline="From developing ads to consulting on campaign tech, we're ready to help."/>
				 {/*<div >
					 
					 <h3>newbiz@WeAreRED.com  <span>  |  310 399.4242</span> </h3>
				  </div>*/}
				<Slideshow content={data9} cycleSpeed={3000} />
			</div>
			</div>
// 			 </ReactFullpage.Wrapper> 
// 		 )
// }}
// /> 
: <HamburgerOverlay/>}
 
</div>
		)
	}

	
}

export default App
