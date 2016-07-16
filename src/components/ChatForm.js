import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class ChatForm extends React.Component {

	render() {
		const {fields: {message}, handleSubmit, action} = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(action)}>
					<input type="text" placeholder="Your message" {...message}/>
					<input type="submit" value="Send" />
				</form>
			</div>
		)
	}
}

ChatForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
	form: 'chatForm',                           // a unique name for this form
	fields: ['message'] // all the fields in your form
})(ChatForm);

export default ChatForm;