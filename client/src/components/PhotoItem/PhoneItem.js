import React from 'react';
import { Link } from 'react-router-dom';
import './PhoneItem.scss'

const PhoneItem = (props) => {
    const {phone} = props;
    return (
        <div className="phone-card card">
            <Link to={'/phones/' + phone.id}>
                <div className="phone-image">
                    <img src={`/`+ phone.imageFileName} alt={props.phone.name}/>
                </div>
                <h2>{phone.name}</h2>
                <p class="small">{phone.manufacturer}</p>
                <div><p class="tag">{phone.price + ' €'}</p></div>
            </Link>
        </div>
    )
}

export default PhoneItem;