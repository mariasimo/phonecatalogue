import React, {useEffect} from 'react';
import { useParams } from 'react-router'; 
import { useDispatch, useSelector } from 'react-redux';
import { startGetPhones } from '../../actions';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import './PhoneDetails.scss';

const PhoneDetail = () => { 
    const dispatch = useDispatch();
    const {id} = useParams()
    const phone = useSelector(state => state.phones[id])

    useEffect(_ => {
        if(!phone) {
            dispatch(startGetPhones());
        }
    })

    return (
        <>
        <Navbar isHome={false}/>
        <main className="phone-detail">
            <div className="wrapper">
            {phone ? (
                <>
                    <div className="image card">
                      <img src={`/`+ phone.imageFileName} alt={phone.name}/>
                    </div>
                    <div className="content">
                        <h2>{phone.manufacturer}</h2>
                        <h1>{phone.name}</h1>
                        <div><p className="tag">{phone.price + ' €'}</p></div>
                        <p>{phone.description}</p>

                        <div className="characteristics">
                            <h3 className="small">Characteristics:</h3>
                            <div className={"color " + phone.color}></div>
                            <ul>
                                <li><span>Screen:</span> {phone.screen}</li>
                                <li><span>Processor:</span> {phone.processor}</li>
                                <li><span>Ram:</span> {phone.ram}</li>
                            </ul>
                        </div>
                    </div>
                </>
                ) : <Loader/> }
            </div>
        </main>
        </>
    )
}

export default PhoneDetail;

