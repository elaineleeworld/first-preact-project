// Demo Functional Component

import { h, render, Component } from 'preact'
// import classNames from 'classNames'

import '../../style/CTA.scss'



// const CTA = ({ ...props }) => {
// 	return (
// 		<div
// 			class='CTA' 
// 			onClick={props.onClick}
// 		>
// 			{props.word}
// 		</div>
// 	)
// }

// export default CTA

class CTA extends Component {
	
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
			<div
			class='CTA' 
			onClick={this.props.onClick}
			style={{display: this.state.showComponent ? 'block' : 'none'}}
		>
			{this.props.word}
		</div>
		)
	}
}

export default CTA

