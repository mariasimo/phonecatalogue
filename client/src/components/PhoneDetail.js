import React from 'react'
import { connect } from 'react-redux'

function PhoneDetail(props) { 
    return (
        <div>
            {props.phone ? props.phone.name : 'loading'}
        </div>
    )
}

const mapStateToProps =  (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        phone: state.phones.find(phone => phone.id === +id)
    }
}

export default connect(mapStateToProps)(PhoneDetail)