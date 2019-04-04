import { h, render, Component } from 'preact'

import CTA from './components/CTA'
import Slideshow from './components/Slideshow'
import CopyText from './components/CopyText'
// import introJSON from './api/SlideData'
// import introJSON from '../SlideData.json'
// import * as introJSON from '../../SlideData.json'
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
	render(props, states) {
		return (
			<div id='app'>
			<div className='section'>
				<CopyText headline='Ads with impact.' subheadline="For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting."/>
				
				<Slideshow content={data} cycleSpeed={3000} />
			</div>
			
			<div className='section'>
				<CopyText headline='20 years at the forefront of digital advertising' subheadline="In 1999, while people were still using dial-up to surf the Net, we were owing the banner game." />

				<Slideshow content={data2} cycleSpeed={3000} />
			</div>
				
			<div className='section'>

				<CopyText headline="0.5 seconds is the average time spend on a social ad. <br/> We've got that beat." subheadline="Our mission: stop the scroll. Whether they're planned weeks in advance or bult on the fly, our social ads stand out in a feed."/>
				
				<Slideshow content={data3} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 	<CopyText headline="13x. That's how much faster we work." subheadline="We've developed in-house ad tech that creates dynamic campaigns, at scale, and much faster than conventional production methods. Including a product called Velvet - our favorite toy."/>
				
				<Slideshow content={data4} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 	<CopyText headline="100% of our code is open-source, self-compiling, and compatible with all networks." subheadline="So it just, you know... works." />
				 
				<Slideshow content={data5} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 	<CopyText headline="6 partners consult with us about how to make their platforms work better." subheadline="You may have heard of them." />
				
				<Slideshow content={data6} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 	<CopyText headline="100% of our in-house team knows the platforms inside and out." subheadline=">We've got project managers who know the tech like they coded it. Developers with backgrounds in design and animation.  A company-wide expertise in all things social.  We can build what you need, but we can also advise on how to get the most out of every platform." />
				
				<Slideshow content={data7} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 	<CopyText headline="Tons of happy clients use our skills every day." subheadline="They're too many to count. But they include some big names in sports, streaming entertainment, and beverage - and one kinda famous mouse."/>
				 
				<Slideshow content={data8} cycleSpeed={3000} />
			</div>
			<div className='section'>
			 <CopyText headline="Give us a test project." subheadline="From developing ads to consulting on campaign tech, we're ready to help."/>
				 {/*<div >
					 
					 <h3>newbiz@WeAreRED.com  <span>  |  310 399.4242</span> </h3>
				  </div>*/}
				<Slideshow content={data9} cycleSpeed={3000} />
			</div>
		</div>
		)
	}
}

export default App
