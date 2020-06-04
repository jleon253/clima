import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Clima = ({ resultado }) => {
	const { name, sys, main, weather, clouds } = resultado
	if (!name) return null // Si aún no hay resultado
	const urlIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

	return (
		<div className='card hoverable blue-grey lighten-3'>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>
					<b>
						{name},{sys.country}
					</b>
					<i className='material-icons right'>more_vert</i>
				</span>
				<div
					className='row'
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<img src={urlIcon} width='100' alt='weather icon' />
					<span className='temperatura'>{main.temp} &#x2103;</span>
				</div>
				<blockquote>
					<b>{weather[0].main}</b> - {weather[0].description}
				</blockquote>
				<div className='divider'></div>
				<div className='row section'>
					<div className='col s6'>
						<b>
							<small>Clouds:</small>
						</b>
					</div>
					<div className='col s6'>
						<small>{clouds.all} %</small>
					</div>
					<div className='col s6'>
						<b>
							<small>Sunrise:</small>
						</b>
					</div>
					<div className='col s6'>
						<small>{moment.unix(sys.sunrise).format('LT')}</small>
					</div>
					<div className='col s6'>
						<b>
							<small>Sunset:</small>
						</b>
					</div>
					<div className='col s6'>
						<small>{moment.unix(sys.sunset).format('LT')}</small>
					</div>
				</div>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					<b>
						{name},{sys.country}
					</b>
					<i className='material-icons right'>close</i>
				</span>
				<div className='divider'></div>
				<div className='row section'>
					<div className='col s6'>
						<b>Temperature min:</b>
					</div>
					<div className='col s6'>{main.temp_min} &#x2103;</div>
					<div className='col s6'>
						<b>Temperature max:</b>
					</div>
					<div className='col s6'>{main.temp_max} &#x2103;</div>
					<div className='col s6'>
						<b>Pressure:</b>
					</div>
					<div className='col s6'>{main.pressure} hpa</div>
					<div className='col s6'>
						<b>Humidity:</b>
					</div>
					<div className='col s6'>{main.humidity} %</div>
				</div>
			</div>
		</div>
	)
}

Clima.propTypes = {
	resultado: PropTypes.object.isRequired,
}

export default Clima
