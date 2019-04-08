import { h, render, Component } from 'preact'

class HamburgerOverlay extends Component {
	render(){
		return(
			<div className="hamburger-overlay-container">
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




			)
	}
}

export default HamburgerOverlay