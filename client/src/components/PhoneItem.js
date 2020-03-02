import React from 'react';
import { Link } from 'react-router-dom';

export default function PhoneItem(props) {
    return (
        <div>
            <Link to={'/phone/' + props.phone.id}>
                <h4>{props.phone.name}</h4>
            </Link>
        </div>
    )
}
