import React, { useState } from 'react'
import axios from 'axios'
import { useStateValue } from 'react-conflux'
import { smurfContext } from '../store/contexts/smurfContext'
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from '../store/actions/smurfActions'

function Form(props) {
  const [state, dispatch] = useStateValue(smurfContext)
  const [form, setForm] = useState({
    name: '',
    age: '',
    height: '',
    id: Math.random()
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: FETCH_SMURF_START })
    axios.post('http://localhost:3333/smurfs', form)
      .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err.message }))

  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Add a New Smurf</h2>
      <label htmlFor='smurfName' >
        Smurf Name<br />
        <input name='name' value={form.name} onChange={handleChange} />
      </label>
      <label htmlFor='smurfAge' >
        Smurf Age<br />
        <input name='age' value={form.age} onChange={handleChange} />
      </label>
      <label htmlFor='smurfHeight' >
        Smurf Height<br />
        <input name='height' value={form.height} onChange={handleChange} />
      </label>
      <button type='submit'>Add Smurf</button>
    </form>
  )
}

export default Form