import { h, render, Component } from 'preact'
import ReactPlayer from 'react-player'

import '../../style/HamburgerOverlay.scss'

class HamburgerOverlay extends Component {
	render(){
		return(
			<div className="hamburger-overlay-container">
				<div className='hamburger-list-container'>
					<div className='overlay-divider-line'>

					<ul>
						<li>Home</li>
						<li>Latest Work</li>
						<li>Discover Velvet</li>
						<li>Contact Us</li>
						<li>Careers</li>
					</ul>
					</div>
				</div>
			</div>




			)
	}
}

export default HamburgerOverlay