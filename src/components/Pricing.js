import React from 'react'
import { IconContext } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <>
        <IconContext.Provider value={{ color: '#fff', size: 64}}>
            <div className='pricing_section'>
                <div className='pricing_wrapper'>
                    <h1 className='pricing_heading'>Pricing</h1>
                    <div className='pricing_container'>
                        <Link to='/sign_up' className='pricing_container-card'>
                            <div className='pricing_container-card'>
                                <div className='icon'>
                                  
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    </>
  )
}

