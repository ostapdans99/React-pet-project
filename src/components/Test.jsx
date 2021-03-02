import React from "react"
import { connect } from "react-redux"

const Test = ({ someProps }) => {
	return (
		<div>
			{someProps.map((word, index) => (
				<p key={index}>{word}</p>
			))}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		someProps: state.data.test1,
	}
}

export default connect(mapStateToProps, null)(Test)
