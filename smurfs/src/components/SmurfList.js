import React from 'react'
import Smurf from './Smurf'
import { useStateValue } from 'react-conflux'
import { smurfContext } from '../store/contexts/smurfContext'

function SmurfList() {
    const [{ smurfs }] = useStateValue(smurfContext)
    return (
        <>
            <div className='smurf-container' >
                {smurfs.map(item => {
                    return <Smurf key={item.id} smurf={item} />
                })}
            </div>
        </>
    )
}


export default SmurfList