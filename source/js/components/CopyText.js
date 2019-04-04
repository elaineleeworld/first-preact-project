import { h, render, Component } from 'preact'

import '../../style/main.scss'

class CopyText extends Component {
	


	render() {
		

		return (
			<div className='copy-text-container'>
				 <img className='red-logo' src='assets/images/REDproduction.png'/>
				
				 {this.props.children}
				
				
				 </div>
		)
	}
}

export default CopyText
