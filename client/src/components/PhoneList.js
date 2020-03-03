import React, {useState, useEffect} from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import PhoneItem from './PhoneItem';
import { startGetPhones } from '../actions';

function PhoneList(props) {
    const dispatch = useDispatch();
    const [phones, setPhones] = useState([]);
   
    useEffect(_ => {
        if(phones.length === 0) {
            dispatch(startGetPhones());
            setPhones([{}, {}])
        }
    })

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