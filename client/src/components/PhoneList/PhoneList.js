import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import PhoneItem from '../PhotoItem/PhoneItem';
import Navbar from '../Navbar/Navbar';
import { startGetPhones } from '../../actions';
import './PhoneList.scss'
import Loader from '../Loader/Loader';

function PhoneList(props) {
    const dispatch = useDispatch();
    const phones = props.phones;
   
    useEffect(_ => {
        if(phones.length === 0) {
            dispatch(startGetPhones());
        }
    })

    return (
        < >
        <Navbar isHome={false}/>
        <main className="phone-list">
            <div className="wrapper">
                <h1>Phone List</h1>
                <div className="content">
                    {props.phones.length 
                        ? props.phones.map(phone => (
                            <PhoneItem key={phone.id} phone={phone}/>
                        ))  
                        : <Loader/>
                    }
                </div>
            </div>
        </main>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        phones : state.phones
    }
}

export default connect(mapStateToProps)(PhoneList);