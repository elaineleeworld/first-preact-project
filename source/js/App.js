import { h, render, Component } from 'preact'

import CTA from './components/CTA'
import Slideshow from './components/Slideshow'
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
				<div className='copy-text-container'>
				 <img className='red-logo' src='assets/images/REDproduction.png'/>
				 <div className='copy-text'>
				 <h1>Ads with impact.</h1>
				 <br/>
				 <p>For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting.</p>
				 <br/>
				 <br/>
				 <CTA word='SCROLL THE FACTS'/>
				 </div>
				 </div>
				{/*<Slideshow content={`http://localhost:8000/SlideData.json`} cycleSpeed={3000} />*/}
				<Slideshow content={data} cycleSpeed={3000} />
			</div>
			
			<div className='section'>
				{/*<div className='copy-text-container'>
				 <img className='red-logo' src='assets/images/REDproduction.png'/>
				 <div className='copy-text'>
				 <h1>20 years at the forefront of digital advertising</h1>
				 <br/>
				 <p>In 1999, while people were still using dial-up to surf the Net, we were owing the banner game.</p>
				 </div>
				 </div>*/}
				<Slideshow content={data2} cycleSpeed={3000} />
			</div>

			<div className='section'>
				<Slideshow content={data3} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data4} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data5} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data6} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data7} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data8} cycleSpeed={3000} />
			</div>
			<div className='section'>
				<Slideshow content={data9} cycleSpeed={3000} />
			</div>
		</div>
		)
	}
}

export default App
