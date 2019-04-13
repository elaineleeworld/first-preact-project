import { h, render, Component } from 'preact'

import '../../style/CopyText.scss'

class CopyText extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			showComponent: false
		}
	}
    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    };
    show = function () {
        this.setState({showComponent: true});
    };
	render() {
		

		return (
			<div className='copy-text-container' style={{display: this.state.showComponent ? 'block' : 'none'}}>
				
				<div className='copy-text' >
				 <h1>{this.props.headline}</h1>
				
				<p>{this.props.subheadline}</p>
				 </div>
			</div>
		)
	}
}

export default CopyText
