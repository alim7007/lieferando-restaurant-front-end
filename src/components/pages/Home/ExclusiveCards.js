import React from 'react'
import './ExclusiveCards.css'
import ExclusiveCardsItem from './ExclusiveCardsItem'
import { exclusive } from './JSONADD'

const ExclusiveCards = () => {
    return (

        <div className='exclusive'>
            <div className='exclusive-container4'>
                <h1>Exclusive foods</h1>
                <div className="inner-container4">
                    {exclusive.map((item, i) => (
                        <ExclusiveCardsItem
                            key={i}
                            title={item.title}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ExclusiveCards
