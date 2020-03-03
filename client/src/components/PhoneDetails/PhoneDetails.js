import React, {useEffect} from 'react'
import { connect, useDispatch } from 'react-redux'
import { startGetPhones } from '../../actions';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import './PhoneDetails.scss'
import Footer from '../Footer/Footer';

function PhoneDetail(props) { 
    const dispatch = useDispatch();
    const phones = props.phones;
    const phone = props.phone;

    useEffect(_ => {
        if(phones.length === 0) {
            dispatch(startGetPhones());
        }
    })

    return (
        <>
        <Navbar isHome={false}/>
        <main className="phone-detail">
            <div className="wrapper">
            {props.phone ? (
                <>
                    <div className="image">
                      <img src={`/`+ phone.imageFileName} alt={props.phone.name}/>
                    </div>
                    <div className="content">
                        <h1>{phone.name}</h1>
                        <p>{phone.description}</p>
                    </div>
                </>
                ) : <Loader/> }
            </div>
        </main>
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

// "id": 1,
// "name": "Galaxy S7",
// "manufacturer": "Samsung",
// "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
// "color": "grey",
// "price": 209,
// "imageFileName": "Galaxy_S7.png",
// "screen": "5,1 inch Quad-HD",
// "processor": "Snapdragon 820",
// "ram": 4