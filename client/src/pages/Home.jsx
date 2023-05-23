import React from 'react'
import '../pages/_Home.scss'

const Home = () => {
  return (
    <>
      <div className='section1'>
        <div className='container'>
          <div className='left'>
            <h1>Improved
              Production level
              with Robotics</h1>
            <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
            <button className='primary-btn'>View Details</button>
          </div>
          <div><img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp" alt="" /></div>
        </div>
      </div>
      <div className='section2'>

      <div><img src="https://preview.colorlib.com/theme/robotics/img/about-img.png.webp" alt="" /></div>
        <div className='right'>
          <h1>Globally Connected
            by Large Network
          </h1>
          <h5>We are here to listen from you deliver exellence</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
          <button className='primary-btn'>View Details</button>
     
      </div>
      </div>
    </>
  )
}

export default Home