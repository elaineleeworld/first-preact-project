import { h, render, Component } from 'preact'
import {Router} from 'preact-router';
import { Link, Match } from 'preact-router/match';
import Slideshow from'./Slideshow'
import Modal from './Modal'

import ReactDelayRender from 'react-delay-render';
import Delay from 'react-delay-render';

import '../../style/HamburgerOverlay.scss'


const HamburgerOverlay = ({ handleClose, handleClose2, handleClose3, handleClose4, show, children }) => {
  const showHideClassName = show ? 'hamburger-overlay-container display-block' : 'hamburger-overlay-container display-none';
 
  return (
  	<div className="hamburger-overlay-container" className={showHideClassName}>
  	<img className='red-logo' src='assets/images/REDproduction.png'/>
				<div className='hamburger-list-container'>
					<div className='overlay-divider-line'>
					{children}

        		<ul>
      <li href="/" onClick={handleClose} >Home</li>
      <li href="/work" onClick={() => {
							window.location.href = 'http://sizzle.wearered.com'
						}}>Latest Work</li>
      <li href="/velvet" onClick={handleClose2}>Discover Velvet</li>

      <li href="/contact" onClick={handleClose4}>Contact Us</li>
    {/*  <li href="/careers" onClick={() => {
							window.location.href = 'http://www.wearered.com/careers'
						}}>Careers</li>*/}
    </ul>
    
		 <img className='overlay-close-icon' src='assets/images/X.png'
          onClick={handleClose}  />
   
					</div>
				</div>
			</div>


);
}
   

// export default ReactDelayRender({ delay: 1000 })(HamburgerOverlay);
// export default Delay({ delay: 1000, onRender: render })(HamburgerOverlay)
export default HamburgerOverlay;