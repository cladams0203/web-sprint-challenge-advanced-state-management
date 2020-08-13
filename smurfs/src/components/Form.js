import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions/smurfActions'

function Form(props) {
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
    props.addSmurf(form)

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

export default connect(null, { addSmurf })(Form)