import React, { useState } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { smurfState } from '../recoil/atoms'

function Form(props) {
  const [state, setState] = useRecoilState(smurfState)
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
    setState({ ...state, loading: true })
    axios.post('http://localhost:3333/smurfs', form)
      .then(res => setState({ ...state, loading: false, smurfs: res.data }))
      .catch(err => setState({ ...state, loading: false, error: err.message }))

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