import { h, render, Component } from 'preact'

import CTA from './components/CTA'
import Slideshow from './components/Slideshow'
// import introJSON from './api/SlideData'
// import introJSON from '../SlideData.json'
// import * as introJSON from '../../SlideData.json'
var data = require('./data/SlideData.json')


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
				
				<Slideshow content={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4723/slides.json`} cycleSpeed={3000} />
			</div>

			<div className='section'>
				<Slideshow content={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4723/slides.json`} cycleSpeed={3000} />
			</div>
			</div>
		)
	}
}

export default App
