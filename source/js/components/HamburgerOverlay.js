import { h, render, Component } from 'preact'
import {Router} from 'preact-router';
import { Link, Match } from 'preact-router/match';
import Slideshow from'./Slideshow'
import Modal from './Modal'

import ReactDelayRender from 'react-delay-render';
import Delay from 'react-delay-render';

import '../../style/HamburgerOverlay.scss'

//  const methods = {
// 	  componentWillMount(props) {
// 	    console.log('I mounted! Here are my props: ', props);
// 	     setTimeout(function() {
//            HamburgerOverlay();
//         }, 2000);
// 	  }
// };

const HamburgerOverlay = ({ handleClose, handleClose2, handleClose3, handleClose4, show, children }) => {
  const showHideClassName = show ? 'hamburger-overlay-container display-block' : 'hamburger-overlay-container display-none';
 // const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
  	<div className="hamburger-overlay-container" className={showHideClassName}>
  	<img className='red-logo' src='assets/images/REDproduction.png'/>
				<div className='hamburger-list-container'>
					<div className='overlay-divider-line'>
					{children}

        		<ul>
      <li href="/" onClick={handleClose} >Home</li>
      <li href="/work" onClick={handleClose2}>Latest Work</li>
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
   
       
 
// class HamburgerOverlay extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			showComponent: false
// 		}

// 	}
// 	componentWillMount() {
//         var that = this;
//         setTimeout(function() {
//             that.show();
//         }, 100);
//         // setTimeout(function() {
//         //     that.noShow();
//         // }, 101);
//     };
//     show = function () {
//         this.setState({showComponent: true});
//      //    document.documentElement.style.overflow = 'hidden';
//    		// document.body.scroll = "no";
      
//     };
//     noShow = function () {
//         this.setState({showComponent: false});
//    //      document.documentElement.style.overflow = 'scroll';
//  		// document.body.scroll = "yes";
      
       
//     };
// 	render(showMenu, props){
// 		return(

			
// 			<div id="hamburger-overlay-container" className={this.showMenu ? 'hamburger-overlay-container display-block' : 'hamburger-overlay-container display-none'} style={{
// 				display: this.state.showComponent ? 'block' : 'none'
// 			}} >
// 				<div className='hamburger-list-container'>
// 					<div className='overlay-divider-line'>
// <img className='red-logo' src='assets/images/REDproduction.png'/>
// 					{/*<Router>
// 						<Slideshow path='/'/>*/}
// 						{/*<Work path='/latest-work'/>*/}
// 						{/*<Velvet path='/discover-velvet'/>*/}
// 						{/*<Contact path='/contact'/>*/}
// 						{/*<Careers path='/careers'/>*/}
// 					{/*</Router>*/}
					 
//     <Match path="/">
//       { ({ matches, path, url }) => (
//         		<ul>
//       <li href="/" onClick={(e) => this.props.closeOverlay(e.target.value)}>Home</li>
//       <li href="/work" onClick={(e) => this.props.linkToSection7(e.target.value)}>Latest Work</li>
//       <li href="/velvet" onClick={(e) => this.props.linkToSection3(e.target.value)}>Discover Velvet</li>
//       <li href="/contact" onClick={(e) => this.props.linkToSection8(e.target.value)}>Contact Us</li>
//       <li href="/careers" onClick={(e) => this.props.urlLink(e.target.value)}>Careers</li>
//     </ul>
//       ) }
//     </Match>
//     <img className='overlay-close-icon' src='assets/images/X.png' onClick={() => this.noShow()}  />
		
   
// 					</div>
// 				</div>
// 			</div>




// 			)
// 	}
// }

// export default ReactDelayRender({ delay: 500 })(HamburgerOverlay);
// export default Delay({ delay: 200, onRender: render })(HamburgerOverlay)
export default HamburgerOverlay;