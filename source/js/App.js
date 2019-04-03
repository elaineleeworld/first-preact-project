import { h, render, Component } from 'preact'

// import CTA from './components/CTA'
// import FlipImage from './components/FlipImage'
import Slideshow from './components/Slideshow'

class App extends Component {
	render(props, states) {
		return (
			<div id='app'>
			<div>
				<Slideshow content={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4723/slides.json`} cycleSpeed={3000} />
			</div>
			<br/>
			<div>
				<Slideshow content={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4723/slides.json`} cycleSpeed={3000} />
			</div>
			</div>
		)
	}
}

export default App
