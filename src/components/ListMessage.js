import React, {PropTypes} from 'react'

const ListMessage = ({list}) => (
    <div>{list.map(item => <p>{item}</p>)}</div>
)

ListMessage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default ListMessage;