import { h, render, Component } from 'preact'

import '../../style/CopyText.scss'

class CopyText extends Component {

	
	constructor(props){
		super(props);
		this.state = {
			showComponent: false,
			opacity: 0
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
        setTimeout(() =>
        this.setState({ opacity: 1 }), 20 // something very short
      )
    };
	render() {
	

		return (
			<div className='copy-text-container' 
			style={{
				display: this.state.showComponent ? 'block' : 'none',
				transition: 'opacity 1s ease',
            	opacity: this.state.opacity
			}} >
				
				<div className='copy-text' >
				 <h1>{this.props.headline}</h1>
				
				<p>{this.props.subheadline}</p>
				<img className='copy-text-image' src={this.props.imagesrc}></img>
				<div className='cta-text' onClick={this.props.onClick} style={this.props.ctaStyles}>{this.props.cta}</div>
				 </div>
			</div>
		)
	}
}

export default CopyText
