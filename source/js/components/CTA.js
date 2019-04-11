// Demo Functional Component

import { h, render, Component } from 'preact'

import '../../style/CTA.scss'

const CTA = ({ ...props }) => {
	return (
		<div
			class='CTA'
			onClick={props.onClick}
		>
			{props.word}
		</div>
	)
}

export default CTA
