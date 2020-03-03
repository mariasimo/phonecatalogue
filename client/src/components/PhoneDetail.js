import React, {useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import { startGetPhones } from '../actions';


function PhoneDetail(props) { 
    const dispatch = useDispatch();
    const phones = props.phones;

    useEffect(_ => {
        if(phones.length === 0) {
            dispatch(startGetPhones());
        }
    })

    return (
        <>
            {props.phone ? (
                <div className="detail">
                <h1>{props.phone.name}</h1>
                <p>{props.phone.description}</p>
                
                </div>
            ) : 'loading'}
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        phones: state.phones,
        phone: state.phones.find(phone => phone.id === +id)
    }
}

export default connect(mapStateToProps)(PhoneDetail)