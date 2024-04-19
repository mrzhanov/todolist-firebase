import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({playStatus,herocount}) => {
  if (playStatus) {
    return (
        <video className='background' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
    )
  }
    
}

export default Background