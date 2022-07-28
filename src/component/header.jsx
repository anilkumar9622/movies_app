import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../1.png'

export default function Header() {
    return (
        <>
            <div style={{
                position: 'sticky', top: "0", background: '#131937', width: '100%', height: "4rem", display: 'flex', listStyleType: 'none', justifyContent: 'center', zIndex: 200,
                alignItems: 'center', gap: '20rem', color: 'white', paddingTop: '1rem',
            }}>

                <div >

                    <ul style={{ marginRight: '3rem', display: 'flex', listStyleType: 'none', justifyContent: 'flex-start', alignItems: 'center', textDecoration: 'none', gap: '2.5rem', color: 'white' }}>
                        <Link to=''> <img src={img} style={{ width: "7rem" }} alt='hari' /></Link>
                        <li> <Link to='' style={{ textDecoration: 'none', color: "white" }}>Movies</Link></li>
                        <li><Link to='' style={{ textDecoration: 'none', color: "white" }}>TV Show</Link></li>
                        <li><Link to='' style={{ textDecoration: 'none', color: "white" }}>People</Link></li>
                        <li ><Link to='' style={{ textDecoration: 'none', color: "white" }}>More</Link></li>
                    </ul>

                </div>
                <div >
                    <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'flex-end', alignItems: 'center', textDecoration: 'none', gap: '2.5rem', color: 'white' }}>

                        <li> <Link to='' style={{ textDecoration: 'none', color: "white" }}>Log In</Link></li>
                        <li><Link to='' style={{ textDecoration: 'none', color: "white" }}>Join Us</Link></li>
                        <Link to=''>  <SearchOutlined style={{ fontSize: '.6rem', color: 'white' }} /></Link>

                    </ul>
                </div>

            </div>
        </>
    )
}
