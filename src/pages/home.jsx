import React, { useEffect, useState } from 'react'
import { Button, Input, Card, Rate, Switch, Pagination } from 'antd'
import Carousel1 from '../component/carousel'
import axios from 'axios'
import Footer from '../component/footer'
import { base_url } from '../component/config'
import Header from '../component/header'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import './home.css'

export default function Home() {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [mediaType, setmediaType] = useState([])
    const [search, setSearch] = useState("");
    const [page, setPage] = useState("")
    // console.log("page", page)
    // console.log("search", search)
    // console.log("data2", data2,)
    const Changehandler = (checkedValues) => {
        setmediaType(checkedValues ? 'movie' : 'tv')

    }
    useEffect(() => {
        const fetchData = () => {
            axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5").then(res => {
                setData1(res);
            }).catch(err => console.log(err))
        }

        fetchData();
    }, [mediaType]);

const onChange = (e) =>{
      setPage(e)
}
   
    const changeHandle = e => {

        setSearch(e.target.value)

    }

   
    useEffect(() => {
        const fetch = () => {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ab2ea070f9aa3c1aa576539e31964dd5&language=en-US&query=${search}&page=${page}&include_adult=false`)
                .then(res => {
                    setData2(res.data?.results);
                }).catch(err => console.log(err))
        }

        fetch();

    }, [search, page]);


    const d = data1.data;
    const w = d?.results;

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 1470
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 1470
    }

    const { Meta } = Card;
    return (
        <>
            <div style={{ position: 'relative' }}>
                <Header />
                {/* </div> */}
                <div style={{ position: '' }}>
                    <div style={{}} >
                        <Carousel1 />
                        <div style={{ position: 'absolute', margin: '-25rem 0rem 0rem 20rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ fontWeight: '700', fontSize: '2.6rem' }}>Welcome to the weeked watch</div>


                            <div style={{ fontWeight: '500', fontSize: '1rem', marginTop: '1rem' }}>
                                <p>millions of movies, TV show and many more</p>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Input placeholder="Search for movies, tv show and person" type='text' onChange={changeHandle}
                                    style={{ width: '45rem', height: '3rem', background: 'white', borderRadius: '2rem', marginTop: '1rem' }} />
                                <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-2.85rem', marginRight: '.2rem' }}>
                                    <Button 
                                        style={{ position: 'absolute', width: '7.5rem', height: '2.7rem', borderRadius: '2rem', background: '#cf2b1f', color: 'white', display: 'flex', justifyContent: 'center', }}><p style={{ marginTop: '.2rem' }}>Search</p></Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: '1.5rem',
                        fontWeight: 'bold', margin: '2rem 13rem', gap: '2rem'
                    }}>What's a Popular  <Switch
                            checkedChildren="Movies"
                            defaultChecked
                            unCheckedChildren="TV show"
                            style={{ width: '5rem', height: '1.5rem', background: 'red' }}
                            onChange={Changehandler}

                        />
                    </div>




                    <div id="main-slider-container" >
                        <button className='' style={{ opacity: '.5', minHeight: '2.6rem', minWidth: '2.8rem', borderRadius:'50%', margin:'0rem 0rem 5rem 3rem' }}
                            onClick={slideLeft} >
                            <CaretLeftOutlined />
                        </button>
                        <div id="slider">

                            {w?.filter((item) => {
                                if (!mediaType.length) {
                                    return item
                                }
                                else if (mediaType.includes(item.media_type)) {
                                    return item;
                                }
                            }).map(v => {

                                return (
                                    <>
                                        <div  className="slider-card">
                                            <Card
                                                hoverable
                                                style={{ width: 200,  }}
                                                cover={<img alt="example" src={base_url.concat(v.poster_path)} style={{ borderRadius: ".6rem", width: '', height:'' }} />}
                                            >
                                                <Meta title={v.title} description={v.release_date} />
                                                <Meta title={v.name} description={v.first_air_date} />
                                                <Rate allowHalf defaultValue={v.vote_count / 7} style={{fontSize:'.7rem', paddingTop:'.7rem'}}/>
                                            </Card>
                                        </div>
                                    </>)
                            })}
                        </div>
                        <button className='' style={{ opacity: '0.5', minHeight: '2.6rem', minWidth: '2.8rem', borderRadius:'50%',margin:'0rem 2rem 5rem 0rem' }}
                            onClick={slideRight}>
                            <CaretRightOutlined />
                        </button>
                    </div>
                    {/* <-------------------------------------------------------------------> */}
                    <div style={{display:'flex', flexDirection:'row', margin:'2rem 2rem 0rem 7rem '}}><h2>Search results :  </h2>  <Pagination onChange={onChange}  defaultCurrent={1} total={200}  style={{marginLeft:"2rem"}}/></div>
                    <div style={{ height: '20rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '2rem', margin: '2rem 6.5rem', }}>
                        
                        {data2.map(v => {

                            return (
                                <>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', }}>

                                        <Card
                                            hoverable
                                            style={{ width: 200 }}
                                            cover={<img alt="example" src={base_url.concat(v.poster_path)} style={{ borderRadius: ".6rem", width: '' }} />}
                                        >
                                            <Meta title={v.title} description={v.release_date} />
                                            <Meta title={v.name} description={v.first_air_date} />
                                            <Rate allowHalf defaultValue={v.vote_count / 7} style={{fontSize:'.7rem', paddingTop:'.7rem'}} />
                                        </Card>
                                    </div>
                                </>)
                        })}
                    </div>
                    
                    {/* <-----------------------------------------------------------------------------------------> */}
                    <div style={{ marginTop: '95rem' }}>
                        <Footer />
                    </div>
                </div>
            </div>




        </>
    )
}
