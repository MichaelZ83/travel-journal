import React from 'react';
import LocationPointer from '../images/location-pointer.svg'

export default function Card (props) {
    
    console.log(props)

    return (
        <div className='card'>
            <img src={props.data.imageUrl} className='card--img' alt='Location'/>
            <div className='card--content'>
                <div className='card--location'>
                    <img src={LocationPointer} alt='Pointer'/>
                    <p>{props.data.location.toUpperCase()}</p>
                    <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.data.title}</h1>
                <h3>{props.data.startDate} - {props.data.endDate}</h3>
                <p className='card--content--desc'>{props.data.description}</p>
            </div>
        </div>
    )
}