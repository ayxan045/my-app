import React from 'react'
import { Link } from 'react-router-dom'
import './carousel3.scss'
import miniImg3 from '../../img/money.png'

const Carousel3 = () => {
  return (
    <div className='carousel3'>
    <div className='col-lg-12'>
    <div className='all-carousel'>
    <div className='carousel-img'>
    <Link to='/'>
    <img className='img-fluid' src={miniImg3} alt=''/>
    </Link>
    </div>
    <div className='carousel-txt'>
    <Link to='/'>
    <h5>Engineering</h5>
    <p>68 Courses</p>
    </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Carousel3