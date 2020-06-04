import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import Clima from './components/Clima/Clima'
import Error from './components/Error/Error'

function App() {
	const [datos, setDatos] = useState({
		ciudad: '',
		pais: '',
	})
	const [consultar, setConsultar] = useState(false)
	const [resultado, setResultado] = useState({})
	const [error, setError] = useState(false)
	const { ciudad, pais } = datos

	useEffect(() => {
		const consultarAPI = async () => {
			const appId = '****' // API key with user account in the web page https://openweathermap.org
			const unitsTemp = 'metric' // https://openweathermap.org/api/one-call-api#data (Units format: metric = Celsius)
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=${unitsTemp}`
			if (consultar) {
				const api = await fetch(url)
				const data = await api.json()
				console.log(data)
				setResultado(data)
				setConsultar(false)
				if (data.cod === '404') {
					setError(true)
				} else {
					setError(false)
				}
			}
		}
		consultarAPI()
		// eslint-disable-next-line
	}, [consultar])

	let componente = error ? (
		<Error msg={resultado.message} />
	) : (
		<Clima resultado={resultado} />
	)

	return (
		<Fragment>
			<Header titulo='Weather - React App' />
			<div className='contenedor-form'>
				<div className='container'>
					<div className='row'>
						<div className='col m6 s12'>
							<Formulario
								datos={datos}
								setDatos={setDatos}
								setConsultar={setConsultar}
							/>
						</div>
						<div className='col m6 s12'>{componente}</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default App
