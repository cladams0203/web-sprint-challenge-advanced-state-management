import React from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'

function SmurfList(props) {

    return (
        <>
            <div>
                {props.smurfs.map(item => {
                    return <Smurf key={item.id} smurf={item} />
                })}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList)