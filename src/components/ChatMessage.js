import React from 'react'

export default class ChatMessage extends React.Component {
	render() {
		return <p>{this.props.message}</p>;
	}
}