import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ msg }) => {
	return (<div className='error red darken-2'>{msg}</div>)
}

Error.propTypes = {
	msg: PropTypes.string.isRequired,
}

export default Error
