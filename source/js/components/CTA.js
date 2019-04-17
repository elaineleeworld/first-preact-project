// Demo Functional Component

import { h, render, Component } from 'preact'
// import classNames from 'classNames'

import '../../style/CTA.scss'


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

