import { h, render, Component } from 'preact'

import '../../style/main.scss'

class CopyText extends Component {
	


	render() {
		

		return (
			<div className='copy-text-container'>
				 <img className='red-logo' src='assets/images/REDproduction.png'/>
				 <div className='copy-text'>
				 <h1>20 years at the forefront of digital advertising</h1>
				 <br/>
				 <p>In 1999, while people were still using dial-up to surf the Net, we were owing the banner game.</p>
				 </div>
				 </div>
		)
	}
}

export default CopyText
