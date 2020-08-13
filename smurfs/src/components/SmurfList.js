import React from 'react'
import Smurf from './Smurf'
import { useRecoilValue } from 'recoil'
import { smurfState } from '../recoil/atoms'

function SmurfList() {
    const { smurfs } = useRecoilValue(smurfState)
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