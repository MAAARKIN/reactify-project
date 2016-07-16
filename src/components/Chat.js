import React, {PropTypes} from 'react'
import ChatForm from './ChatForm'
import ListMessage from './ListMessage'

class Chat extends React.Component {

    render() {
        const {messages, actionSubmit} = this.props;
        return (
            <div>
                <ListMessage list={messages} />
                <ChatForm action={actionSubmit}/>
            </div>
        );
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string),
    actionSubmit: PropTypes.func.isRequired
}

export default Chat;