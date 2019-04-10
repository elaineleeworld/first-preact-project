import { h, render, Component, createRef, forwardRef } from 'preact'
import CTA from './components/CTA'
import Slideshow from './components/Slideshow'
import Sidebar from './components/Sidebar'
import HamburgerOverlay from './components/HamburgerOverlay'
import CopyText from './components/CopyText'
import React from 'preact-compat';
import styled from 'styled-components';
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




 
class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isOpened: true
		}
		this.heroRef = createRef();
		this.section1ref = createRef();
		this.section2ref = createRef();
		this.section3ref = createRef();
		this.section4ref = createRef();
		this.section5ref = createRef();
		this.section6ref = createRef();
		this.section7ref = createRef();
		this.lastSectionref = createRef();
		this.clickHamburger = this.clickHamburger.bind(this);;

	}

	clickHamburger = () => {
		console.log('HAMBURGER CLICKED!')
		this.setState({ isOpened: !this.state.isOpened})
	};
	clickToTop = () => {
		console.log('CLICKED to TOP!')
		if(this.heroRef.current){
            this.heroRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};

	clickToSection = (currentRef) => {
		console.log('CLICKED!')
		if(currentRef){
            currentRef.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	}
	 scrollDetect = () => {
	  
	  	// window.onscroll = function {
	  	// 	if(window.pageYOffset = 10){

	  	// 	}
	  	// }
	  let lastScroll = 0;

	  // console.log("pageyoffset", pageYOffset)
	  window.onscroll = () => {
	      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
	      console.log('scrollTop', document.documentElement.scrollTop)
	      let sectionNum = Math.floor(currentScroll / window.innerHeight)
	      	 console.log('SECTIONNUM', sectionNum)
	      if (lastScroll - currentScroll < 0 ){
	        console.log("Scrolling DOWN");

	        /*
	        let nextSection = sectionNum + 1;
	        // this[`clickToSection${nextSection}`]()
	        const refName = `section${nextSection}ref`
	        console.log('refName', refName)
	        const nextRef = this[refName].current
	        nextRef && this.clickToSection(nextRef)
	        */
	      
	        lastScroll = currentScroll;
	      }else if( lastScroll - currentScroll > 0){
	        
	       console.log("Scrolling UP");
	      }
	  };
	  // let style = { transform: 'translateY(0px)' };

   //  window.addEventListener('scroll', (event) => {
   //    let scrollTop = event.target.scrollingElement.scrollTop,
   //        itemTranslate = Math.min(0, scrollTop/3 - 60);

   //    style.transform = 'translateY(' + itemTranslate + 'px)';
   //    console.log("STYLE", style)

   //  });
	}


	
	  // scrollPosition = 0
	

    // componentWillReceiveProps () {
    //   const element = ReactDOM.findDOMNode(this);
    //   if (element != null) {
    //     this.scrollPosition = window.scrollY
    //   }
    // }
    componentDidMount(){
    	window.addEventListener('scroll', this.scrollDetect)
 //    	window.addEventListener('scroll', function(e){
	//     let lastScroll = 0;
	//     // Get the new Value
	//     let currentScroll = document.documentElement.scrollToTop || document.body.scrollTop

	//     if (currentScroll > 0 && lastScroll <= currentScroll){
	//     	console.log('DOWN')
	//     } else {
	//     	lastScroll = currentScroll;
	//     	console.log("UPPPP")
	//     }
	// }	
	}   

    // let newValue = window.pageYOffset;

    // //Subtract the two and conclude
    // if(oldValue - newValue < 0){
    //     console.log("Up");
    // } else if(oldValue - newValue > 0){
    //     console.log("Down");
    // }

    // // Update the old value
    // oldValue = newValue;


 //       window.addEventListener("scroll", this.scrollToTop);
 //        scrollToTop = () => {
 //    	window.scrollTo(0, 0);
 //    	 window.addEventListener("scroll", this.scrollToNext);
 //    }
	// scrollToNext = () => {
	//    // const section = document.getElementById('last-section');
	//    //  console.log("SECTION",section)
	//     // section.scrollIntoView();
	//     section.scrollIntoView(document.getElementById('last-section'));
 //  }
    // }
    // componentDidUpdate() {
    //    const {key} = 
    //    if (!scrollPositions[key]) {
    //   // never seen this location before
    //   window.scrollTo(0, 0);
    // } else {
    //   // seen it
    //   window.scrollTo(0, scrollPositions[key]);
    // }
    //   }

 
  // scrollToNextSection = () => {
  //       window.scrollTo({
		// 	top: 0,
		// 	behavior: 'auto'
		// })
  //   };
   //  onScroll = () => {
   //  	document.addEventListener('scroll', function(){
   //  		window.scrollTo(0)
			// // window.scrollTo(0, 500);
		 // })
   //  }

 //  scrollToMySection = () => {
 // 	this.mySection.scrollIntoView({behavior:'auto', block: 'start'})
 // }

    // On component mount, scroll to ref
    // componentDidMount() {
    //     this.scrollToTop();

		// this.mySection.addEventListener('scroll', this.onScroll())

		
  //        const { isSelected } = this.props;
  // if (isSelected) {
  //   this.mySection1.current.scrollIntoView();
  // }
    // }
    //PSEUDOCODE what needs to be done for scrolling
    //when scrolling in a section, jump to 100% vh of next section
    //window event listener scroll down, viewportheight shows 100% of next section
    //winow event listener scroll up, viewport height shows 100% of previous section
    //reload/refresh page, start at top of hero
	render(props, states) {
		
		return (
			<div id='app'>
			<img className='red-logo' src='assets/images/REDproduction.png'/>
			 <div id='hamburger' onClick={this.clickHamburger}>
					 
					  { this.state.isOpened ? <img className='hamburger-icon' src='assets/images/hamburger.png'/> : <img className='X-icon' src='assets/images/X.png'/> }
				</div>

			<div className='divider-line'style={{display: this.state.isOpened ? 'block' : 'none' }} ></div>
			<div className="sidebar-container">
				
				<div className='circles' style={{display: this.state.isOpened ? 'block' : 'none' }}>
					<img className='circle-1' src='assets/images/circle1.png' onClick={() => this.clickToSection(this.section1ref.current)}/>
					<img className='circle-2' src='assets/images/circle2.png' onClick={() => this.clickToSection(this.section2ref.current)}/>
					<img className='circle-3' src='assets/images/circle3.png' onClick={() => this.clickToSection(this.section3ref.current)}/>
					<img className='circle-4' src='assets/images/circle4.png' onClick={() => this.clickToSection(this.section4ref.current)}/>
					<img className='circle-5' src='assets/images/circle5.png' onClick={() => this.clickToSection(this.section5ref.current)}/>
					<img className='circle-6' src='assets/images/circle6.png' onClick={() => this.clickToSection(this.section6ref.current)}/>
					<img className='circle-7' src='assets/images/circle7.png' onClick={() => this.clickToSection(this.section7ref.current)}/>
				</div>
				<div id='mouse' onClick={this.clickToTop} style={{display: this.state.isOpened ? 'block' : 'none' }}>
					 <img className='mouse-icon' src='assets/images/mouse.png'/>
				</div>
			</div>
			 
			
			 
			{ this.state.isOpened ? 

				<ReactFullpage
    			render={({ state, fullpageApi }) => {
    				return(
			 <ReactFullpage.Wrapper>
      		<div className='content-container'>
     
			<div className='section' ref={this.heroRef} >
				<CopyText  headline='Ads with impact.' subheadline="For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting."/>
				
				<Slideshow content={data} cycleSpeed={3000} />
				{/*<img src={Marvel} />*/}
			</div>
			
			<div className='section' ref={this.section1ref} style={this.style}>
				<CopyText headline='20 years at the forefront of digital advertising' subheadline="In 1999, while people were still using dial-up to surf the Net, we were owing the banner game." />

				<Slideshow content={data2} cycleSpeed={3000} />
			</div>
				
			<div className='section' ref={this.section2ref} >

				<CopyText headline="0.5 seconds is the average time spend on a social ad. We've got that beat." subheadline="Our mission: stop the scroll. Whether they're planned weeks in advance or bult on the fly, our social ads stand out in a feed."/>
				
				<Slideshow content={data3} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section3ref} >
			 	<CopyText headline="13x. That's how much faster we work." subheadline="We've developed in-house ad tech that creates dynamic campaigns, at scale, and much faster than conventional production methods. Including a product called Velvet - our favorite toy."/>
				
				<Slideshow content={data4} cycleSpeed={3000} />
			</div>
		
			<div className='section' ref={this.section4ref}>
			 	<CopyText headline="100% of our code is open-source, self-compiling, and compatible with all networks." subheadline="So it just, you know... works." />
				 
				<Slideshow content={data5} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section5ref}>
			 	<CopyText headline="6 partners consult with us about how to make their platforms work better." subheadline="You may have heard of them." />
				
				<Slideshow content={data6} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.section6ref}>
			 	<CopyText headline="100% of our in-house team knows the platforms inside and out." subheadline="We've got project managers who know the tech like they coded it. Developers with backgrounds in design and animation.  A company-wide expertise in all things social.  We can build what you need, but we can also advise on how to get the most out of every platform." />
				
				<Slideshow content={data7} cycleSpeed={3000} />
			</div>
		
			<div className='section' ref={this.section7ref}>
			 	<CopyText headline="Tons of happy clients use our skills every day." subheadline="They're too many to count. But they include some big names in sports, streaming entertainment, and beverage - and one kinda famous mouse."/>
				 
				<Slideshow content={data8} cycleSpeed={3000} />
			</div>
			
			<div className='section' ref={this.lastSectionref}>
			 <CopyText headline="Give us a test project." subheadline="From developing ads to consulting on campaign tech, we're ready to help."/>
				 {/*<div >
					 
					 <h3>newbiz@WeAreRED.com  <span>  |  310 399.4242</span> </h3>
				  </div>*/}
				<Slideshow content={data9} cycleSpeed={3000} />
			</div>
		
			</div> 
			 </ReactFullpage.Wrapper>
		 )
}}
/>
 
			: <HamburgerOverlay/> }
			
		
		
</div>
		)
	}

	
}

export default App
