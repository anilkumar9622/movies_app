import { Carousel } from 'antd'
import 'antd/dist/antd.css';
import React from 'react'

export default function Carousel1() {
    const contentStyle = {
        height: '30rem',
        width:'100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        marginTop: '0rem',


      };
  return (
    <>
    
     <Carousel >
    <div >
      <img src="https://wallpaperaccess.com/full/1076854.jpg" style={contentStyle} alt=''/> 
    </div>
    <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvSLr_Jefz-EXn8pxajLyfgS0nLLD845nGg&usqp=CAU" style={contentStyle} alt='ddd'/>
    </div>
    <div>
    <img src="https://i0.wp.com/www.meinstyn.com/wp-content/uploads/2016/12/Dhoom-3-Movie-Poster-HD-Wallpaper-Aamir-Khan-Abhishek-Bachchan-Katrina-Kaif-Uday-Chopra.jpg?resize=678%2C381&ssl=1" style={contentStyle} alt='eee'/>
    </div>
    <div>
    <img src="https://wallpaperaccess.com/full/645143.jpg" style={contentStyle} alt='fff'/>
    </div>
    
  </Carousel>
  
    </>
  )
}
