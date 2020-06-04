import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ titulo }) => {
	return (
		<nav>
			<div className='nav-wrapper blue darken-1'>
				<a href='#!' className='brand-logo center'>
					{titulo}
				</a>
			</div>
		</nav>
	)
}

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
}

export default Header
