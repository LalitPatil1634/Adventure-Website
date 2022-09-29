import React from 'react'
import { Tour } from './Tour'

export const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            {tours.map((tour, index) => {
                return <Tour key={index} {...tour} removeTour={removeTour} />
            })}
        </div>
    )
}
