import { h, render, Component } from 'preact'
import classNames from 'classNames'
import '../../style/Sidebar.scss'

class Sidebar extends Component {
	constructor(props){
		super(props);
		// this.clickToSection1 = this.clickToSection1.bind(this);
	}

	// clickToSection1 = () => {
	// 	console.log('CLICKED!')
	// 	if(this.section1ref.current){
 //            this.section1ref.current.scrollIntoView({ 
 //               behavior: "smooth", 
 //               block: "nearest"
 //            })
 //        }
	// }
	render(){
		return(
			<div className="sidebar-container">
				<div id='hamburger'>
					 <img className='hamburger-icon' src='assets/images/hamburger.png'/>
				</div>
				<div className='circles'>
					<img className='circle-1' src='assets/images/circle1.png' />

					<img className='circle-2' src='assets/images/circle2.png'/>
					<img className='circle-3' src='assets/images/circle3.png'/>
					<img className='circle-3' src='assets/images/circle3.png' 
					onMouseEnter={(e) => (e.currentTarget.src = 'assets/images/3.png')}
					onMouseOut={(e) => (e.currentTarget.src = 'assets/images/circle3.png')}/>
					<img className='circle-4' src='assets/images/circle4.png'/>
					<img className='circle-5' src='assets/images/circle5.png'/>
					<img className='circle-6' src='assets/images/circle6.png'/>
					<img className='circle-7' src='assets/images/circle7.png'/>
				</div>
			{/*	<div id='mouse'>
					 <img className='mouse-icon' src='assets/images/mouse.png'/>
				</div>*/}
			</div>
			)
	}
}

export default Sidebar