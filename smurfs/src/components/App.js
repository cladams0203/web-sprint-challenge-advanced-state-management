import React, { useEffect } from "react";
import axios from 'axios'
import { useStateValue } from 'react-conflux'
import { smurfContext } from '../store/contexts/smurfContext'
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from '../store/actions/smurfActions'
import SmurfList from './SmurfList'
import Form from './Form'
import "./App.css";


function App() {

  const [state, dispatch] = useStateValue(smurfContext)
  console.log(state)
  useEffect(() => {
    dispatch({ type: FETCH_SMURF_START })
    axios.get('http://localhost:3333/smurfs')
      .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err.massage }))
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {state.loading && <h2>Loading....</h2>}
      <Form />
      <SmurfList />
    </div>
  );

}

export default App
