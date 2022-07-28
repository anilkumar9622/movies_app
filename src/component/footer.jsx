import React from 'react'

export default function Footer() {



    return (
        <>
            {/* <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '', justifyContent: 'center', flexWrap: 'wrap' }}> */}

           <div style={{ backgroundColor: '#13284a', height: '13rem', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: '0rem' }}>
                        <h1 style={{ color: 'white' }}>Weekend Watch</h1>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">24, Vaishnavi Centre, Raja Park,</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5"> 51, Dhanana, Painpat, Haryan, Pincode-154419</a>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'white' }}>THE BASICS</h3>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">About Weekend watch</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Contact Us</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Support</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">API</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '1.2rem' }}>
                        <h3 style={{ color: 'white' }}>GET INVOLVED</h3>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Contribution Guideline</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Add New Movie</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Add New TV Show</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <h3 style={{ color: 'white' }}>COMMUNITY</h3>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Guidelines</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Discussions</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Leaderboard</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Tweeter</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '1rem' }}>
                        <h3 style={{ color: 'white' }}>LEGAL</h3>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Movies,TV</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">& Celebrities</a>
                        <a id='over' href='#' style={{ color: 'white' }} className="ex5">Privacy Policy</a>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <div style={{ width: '100%', height: '4rem', display: 'flex', justifyContent: 'center', backgroundColor: '#1a345e', paddingTop: '1.3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>



                    <h4 style={{ color: 'white', marginBottom: '0px' }}>© 2022 STAR. All Rights Reserved. Weekend watch's a related Movies and Tv Shoes are part of copyright.</h4>
                </div>
            </div>


        </>
    )
}
