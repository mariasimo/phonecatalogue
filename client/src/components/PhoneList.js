import React from 'react'
import { connect } from 'react-redux';
import PhoneItem from './PhoneItem';

function PhoneList(props) {
    return (
        <div>
            <h1>Phone List</h1>
            {props.phones.length ? props.phones.map(phone => (
                <PhoneItem key={phone.id} phone={phone}/>
            )) : 'loading...'}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        phones : state.phones
    }
}

export default connect(mapStateToProps)(PhoneList);