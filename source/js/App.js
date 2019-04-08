import { h, render, Component, createRef, forwardRef } from 'preact'
import CTA from './components/CTA'
import Slideshow from './components/Slideshow'
import Sidebar from './components/Sidebar'
import HamburgerOverlay from './components/HamburgerOverlay'
import CopyText from './components/CopyText'
import React from 'preact-compat';
// var scrollIntoView = require('scroll-into-view');
// import fullpage from 'fullpage.js';

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
		this.clickToSection1 = this.clickToSection1.bind(this);
		this.clickToSection2 = this.clickToSection2.bind(this);
		this.clickToSection3 = this.clickToSection3.bind(this);
		this.clickToSection4 = this.clickToSection4.bind(this);
		this.clickToSection5 = this.clickToSection5.bind(this);
		this.clickToSection6 = this.clickToSection6.bind(this);
		this.clickToSection7 = this.clickToSection7.bind(this);
		this.clickHamburger = this.clickHamburger.bind(this);

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
	clickToSection1 = () => {
		console.log('CLICKED 1!')
		if(this.section1ref.current){
            this.section1ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection2 = () => {
		console.log('CLICKED 2!')
		if(this.section2ref.current){
            this.section2ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection3 = () => {
		console.log('CLICKED 3!')
		if(this.section3ref.current){
            this.section3ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection4 = () => {
		console.log('CLICKED 4!')
		if(this.section4ref.current){
            this.section4ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection5 = () => {
		console.log('CLICKED 5!')
		if(this.section5ref.current){
            this.section5ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection6 = () => {
		console.log('CLICKED 6!')
		if(this.section6ref.current){
            this.section6ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	};
	clickToSection7 = () => {
		console.log('CLICKED 7!')
		if(this.section7ref.current){
            this.section7ref.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
	}
	 // scrollDetect = () => {
	  
	 //  	window.onscroll = function {
	 //  		if(window.pageYOffset = 10){

	 //  		}
	 //  	}
	  // let lastScroll = 0;
	  // // console.log("pageyoffset", pageYOffset)
	  // window.onscroll = function() {
	  //     let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
	  //     console.log('scrollTop', document.documentElement.scrollTop)
	      

	  //     if (lastScroll - currentScroll < 0 ){
	  //       console.log("Scrolling DOWN");
	  //       lastScroll = currentScroll;
	  //     }else if( lastScroll - currentScroll > 0){
	        
	  //      console.log("Scrolling UP");
	  //     }
	  // };
	// }


	
	  // scrollPosition = 0
	

    // componentWillReceiveProps () {
    //   const element = ReactDOM.findDOMNode(this);
    //   if (element != null) {
    //     this.scrollPosition = window.scrollY
    //   }
    // }
    // componentDidMount(){
    // 	window.addEventListener('scroll', this.scrollDetect)
    	// window.addEventListener('scroll', function(e){
	    // let lastScroll = 0;
	    // // Get the new Value
	    // let currentScroll = document.documentElement.scrollToTop || document.body.scrollTop

	    // if (currentScroll > 0 && lastScroll <= currentScroll){
	    // 	console.log('DOWN')
	    // } else {
	    // 	lastScroll = currentScroll;
	    // 	console.log("UPPPP")
	    // }
	   

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


			<div className="sidebar-container">
				
				<div className='circles'>
					<img className='circle-1' src='assets/images/circle1.png' onClick={this.clickToSection1}/>
					<img className='circle-2' src='assets/images/circle2.png' onClick={this.clickToSection2}/>
					<img className='circle-3' src='assets/images/circle3.png' onClick={this.clickToSection3}/>
					<img className='circle-4' src='assets/images/circle4.png' onClick={this.clickToSection4}/>
					<img className='circle-5' src='assets/images/circle5.png' onClick={this.clickToSection5}/>
					<img className='circle-6' src='assets/images/circle6.png' onClick={this.clickToSection6}/>
					<img className='circle-7' src='assets/images/circle7.png' onClick={this.clickToSection7}/>
				</div>
				<div id='mouse' onClick={this.clickToTop}>
					 <img className='mouse-icon' src='assets/images/mouse.png'/>
				</div>
			</div>
			
			{ this.state.isOpened ? <div className='content-container'>
			<div id='hero' ref={this.heroRef} >
				<CopyText  headline='Ads with impact.' subheadline="For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting."/>
				
				<Slideshow content={data} cycleSpeed={3000} />
				{/*<img src={Marvel} />*/}
			</div>
			
			<div className='section-1' ref={this.section1ref} >
				<CopyText headline='20 years at the forefront of digital advertising' subheadline="In 1999, while people were still using dial-up to surf the Net, we were owing the banner game." />

				<Slideshow content={data2} cycleSpeed={3000} />
			</div>
				
			<div className='section-2' ref={this.section2ref} >

				<CopyText headline="0.5 seconds is the average time spend on a social ad. We've got that beat." subheadline="Our mission: stop the scroll. Whether they're planned weeks in advance or bult on the fly, our social ads stand out in a feed."/>
				
				<Slideshow content={data3} cycleSpeed={3000} />
			</div>
			<div className='section-3' ref={this.section3ref}>
			 	<CopyText headline="13x. That's how much faster we work." subheadline="We've developed in-house ad tech that creates dynamic campaigns, at scale, and much faster than conventional production methods. Including a product called Velvet - our favorite toy."/>
				
				<Slideshow content={data4} cycleSpeed={3000} />
			</div>
			<div className='section-4' ref={this.section4ref}>
			 	<CopyText headline="100% of our code is open-source, self-compiling, and compatible with all networks." subheadline="So it just, you know... works." />
				 
				<Slideshow content={data5} cycleSpeed={3000} />
			</div>
			<div className='section-5' ref={this.section5ref}>
			 	<CopyText headline="6 partners consult with us about how to make their platforms work better." subheadline="You may have heard of them." />
				
				<Slideshow content={data6} cycleSpeed={3000} />
			</div>
			<div className='section-6' ref={this.section6ref}>
			 	<CopyText headline="100% of our in-house team knows the platforms inside and out." subheadline="We've got project managers who know the tech like they coded it. Developers with backgrounds in design and animation.  A company-wide expertise in all things social.  We can build what you need, but we can also advise on how to get the most out of every platform." />
				
				<Slideshow content={data7} cycleSpeed={3000} />
			</div>
			<div className='section-7' ref={this.section7ref}>
			 	<CopyText headline="Tons of happy clients use our skills every day." subheadline="They're too many to count. But they include some big names in sports, streaming entertainment, and beverage - and one kinda famous mouse."/>
				 
				<Slideshow content={data8} cycleSpeed={3000} />
			</div>
			<div id='last-section'>
			 <CopyText headline="Give us a test project." subheadline="From developing ads to consulting on campaign tech, we're ready to help."/>
				 {/*<div >
					 
					 <h3>newbiz@WeAreRED.com  <span>  |  310 399.4242</span> </h3>
				  </div>*/}
				<Slideshow content={data9} cycleSpeed={3000} />
			</div>
			</div> 

			: <HamburgerOverlay/> }
			
		</div>
		)
	}
	
}

export default App
