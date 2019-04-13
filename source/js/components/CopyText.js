import { h, render, Component } from 'preact'

import '../../style/CopyText.scss'

class CopyText extends Component {
	
	
	render() {
		

		return (
			<div className='copy-text-container' >
				
				<div className='copy-text'>
				 <h1>{this.props.headline}</h1>
				
				<p>{this.props.subheadline}</p>
				 </div>
			</div>
		)
	}
}

export default CopyText
