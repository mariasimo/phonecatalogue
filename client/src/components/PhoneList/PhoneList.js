import React, { useEffect } from 'react'
import PhoneItem from '../PhotoItem/PhoneItem';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import './PhoneList.scss'
import { useDispatch, useSelector } from 'react-redux';
import { startGetPhones } from '../../actions';

const PhoneList = () => {
    const dispatch = useDispatch();
    const phones = useSelector(state => state.phones);
    const error = useSelector(state => state.error);
   
   
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
                    {error 
                    ?   <p>{error}</p> 
                    :   (phones.length 
                        ? phones.map(phone => (
                            <PhoneItem key={phone.id} phone={phone}/>
                        ))  
                        : <Loader/>)
                    }
                </div>
            </div>
        </main>
        </ >
    )
}
export default PhoneList;