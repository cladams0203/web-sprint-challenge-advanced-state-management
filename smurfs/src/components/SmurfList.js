import React from 'react'
import Smurf from './Smurf'
import { useSelector } from 'react-redux'

function SmurfList() {
    const smurfs = useSelector(state => state.smurfs)
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