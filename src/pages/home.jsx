import React, { useEffect, useState } from 'react'
import { Button, Input, Card, Rate, Switch } from 'antd'
import Carousel1 from '../component/carousel'
import axios from 'axios'
import Footer from '../component/footer'
import { base_url } from '../component/config'
import Header from '../component/header'

export default function Home() {
    const [data1, setData1] = useState([])
    // const [data2, setData2] = useState([])
    const [mediaType, setmediaType] = useState([])
    // const [search, setSearch] = useState("");

    const Changehandler = (checkedValues) => {
        setmediaType(checkedValues ? 'movie' : 'tv')
        
    }
    useEffect(() => {
        const fetchData = () => {
            axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5").then(res => {
                setData1(res);
            }).catch(err => console.log(err))
        }
        console.log("kkkkkk")
        fetchData();
    }, [mediaType]);
  

    // const onSearch = (e) => {
        // e.preventDefault();
        // setData2(data2)
    // }
    // console.log("search", search)
    // useEffect(() => {
    //     const fetch = async () => {
    //         const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ab2ea070f9aa3c1aa576539e31964dd5&language=en-US&query=${search}&page=1&include_adult=false`)
    //         // .then(res => {
            // setSearch(data.data?.results);
            // }).catch(err => console.log(err))
    //     }
    //     fetch();

    // }, []);


    const d = data1.data;
    const w = d?.results;



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
                                <Input placeholder="Search for movies, tv show and person" type='text' 
                                    style={{ width: '45rem', height: '3rem', background: 'white', borderRadius: '2rem', marginTop: '1rem' }} />
                                <div style={{ display: 'flex', justifyContent: 'end', marginTop: '-2.85rem', marginRight: '.2rem' }}>
                                    <Button style={{ position: 'absolute', width: '7.5rem', height: '2.7rem', borderRadius: '2rem', background: '#cf2b1f', color: 'white', display: 'flex', justifyContent: 'center', }}><p style={{ marginTop: '.2rem' }}>Search</p></Button>
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



                    <div style={{ height: '20rem', gap: '2rem', }}>
                        {/* {data1.map(v => { */}
                        <div style={{ height: '20rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '2rem', margin: '2rem 6.5rem', }}>

                            {w?.filter((item, index) => {
                                if (!mediaType.length) {
                                    return item
                                }
                                else if (mediaType.includes(item.media_type)) {
                                    return item;
                                }
                            }).map(v => {

                                return (
                                    <>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', }}>
                                            <Card
                                                hoverable
                                                style={{ width: 200 }}
                                                cover={<img alt="example" src={base_url.concat(v.poster_path)} style={{ borderRadius: ".6rem", width: '' }} />}
                                            >
                                                <Meta title={v.title} description={v.release_date} />
                                                <Rate allowHalf defaultValue={v.vote_count / 7} />
                                            </Card>
                                        </div>
                                    </>)
                            })}
                        </div>
                    </div>

                    <div style={{ marginTop: '95rem' }}>
                        <Footer />
                    </div>
                </div>
            </div>




        </>
    )
}
