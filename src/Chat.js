import React from 'react'
import ChatMessage from './ChatMessage.js'

export default class Chat extends React.Component {

	static get defaultProps() { 
		return {
			text: '',
			messages: []
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
      		messages: props.messages
		};
		this.submit = this.submit.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}

	submit(ev) {
		ev.preventDefault();

		var newMessage = <ChatMessage message={this.state.text} />;

		this.setState({
			messages: this.state.messages.concat([newMessage]),
			text: ''
		});
	}

	updateInput(ev) {
		this.setState({
			text: ev.target.value
		});
	}

	render() {
		return (
			<div>
				<div>{this.state.messages}</div>
				<form onSubmit={this.submit}>
					<input onChange={this.updateInput} value={this.state.text} type="text" placeholder="Your message" />
					<input type="submit" value="Send" />
				</form>
			</div>
		);
	}
}