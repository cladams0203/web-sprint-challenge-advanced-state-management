import React from 'react'

export default function Smurf(props) {
    const { name, age, height } = props.smurf
    return (
        <>
            <div className='smurf-card'>
                <h3> {name} </h3>
                <p>AGE: {age} </p>
                <p>HEIGHT: {height} </p>
            </div>
        </>
    )
}
