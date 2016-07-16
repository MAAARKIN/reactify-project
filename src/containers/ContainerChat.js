import { connect } from 'react-redux'
import Chat from '../components/Chat'
import * as actions from '../actions/index'

const mapStateToProps = (state) => {
    return {
        messages: state.todos.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionSubmit: (message) => {
            dispatch(actions.addMessage(message));
        }
    }
}

const ContainerChat = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ContainerChat