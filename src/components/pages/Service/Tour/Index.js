import React, { useEffect, useState } from 'react'
import { Loading } from './Loading';
import { Tours } from './Tours';
import './Index.css'

const URL = 'https://course-api.com/react-tours-project';

export const Index = () => {

    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const removeTour = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }

    const fetchTours = async () => {
        setIsLoading(true);
        const res = await fetch(URL);
        const data = await res.json();

        setTours(data);
        setIsLoading(false)
    };

    useEffect(() => {
        fetchTours();
    }, [])


    if (isLoading) {
        return <Loading />
    } else {
        return (
            <main>
                <section>
                    <div className='title'>
                        <h2>Our Tours</h2>
                        <div className='underline'></div>
                    </div>
                    {tours.length === 0 ? (
                        <div className='title'>
                            <h2>No Tour Left</h2>
                            <button className='btn' onClick={fetchTours}>Refresh</button>
                        </div>
                    ) : (
                        <Tours tours={tours} removeTour={removeTour} />
                    )}
                </section>
            </main>
        )
    }
}
