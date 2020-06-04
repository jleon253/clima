import React, {useState} from 'react'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

const Formulario = ({datos, setDatos, setConsultar}) => {
  const [error, setError] = useState(false)
  const {ciudad, pais} = datos;

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(ciudad.trim() === '' || pais.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    setConsultar(true)
  };

	return (
    <form className='col s12' onSubmit={handleSubmit}>
      { error ? (<Error msg='Inputs are required' />) : null}
			<div className='row'>
				<div className='input-field col s12'>
					<input type='text' name='ciudad' id='ciudad' value={ciudad} onChange={handleChange} />
					<label htmlFor='ciudad'>City:</label>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s12'>
					<select name='pais' id='pais' value={pais} onChange={handleChange}>
						<option value=''>Choose here...</option>
						<option value='US'>United States</option>
						<option value='MX'>México</option>
						<option value='AR'>Argentina</option>
						<option value='CO'>Colombia</option>
						<option value='CR'>Costa Rica</option>
						<option value='ES'>Spain</option>
						<option value='PE'>Perú</option>
					</select>
					<label htmlFor='pais'>Country:</label>
				</div>
      </div>
      <div className="row">
        <div className="col s12 m12">
          <button type="submit" className="col s12 m12 btn waves-effect waves-light yellow accent-4 black-text">
            Search
             <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
		</form>
	)
}

Formulario.propTypes = {
  datos: PropTypes.object.isRequired,
  setDatos: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
}

export default Formulario
