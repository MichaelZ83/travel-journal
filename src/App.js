import React from 'react';
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data/data.json'

export default function App () {

    const card = data.map(item =>
            <Card 
                key={item.id}
                data={item}
            />
        )

    return (
        <div>
            <Navbar />
            {card}
        </div>
    )
}