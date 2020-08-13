import React, { useEffect } from "react";
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { smurfState } from '../recoil/atoms'
import SmurfList from './SmurfList'
import Form from './Form'
import "./App.css";


function App() {
  const [state, setState] = useRecoilState(smurfState)
  console.log(state)
  useEffect(() => {
    setState({ ...state, loading: true })
    axios.get('http://localhost:3333/smurfs')
      .then(res => setState({ ...state, loading: false, smurfs: res.data }))
      .catch(err => setState({ ...state, loading: false, error: err.message }))
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
