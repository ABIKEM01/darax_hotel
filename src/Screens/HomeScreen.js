import React from 'react'
import Banner from '../Components/Banner/Banner'
import Explore from '../Components/Explore/Explore'
import FeaturedRooms from '../Components/FeaturedRooms/FeaturedRooms'
import Layout from '../Components/Layout/Layout'
import Services from '../Components/Services/Services'

const HomeScreen = () => {
    return (
        <Layout>
            <Banner />
            {/* <Services /> */}
            <Explore />
            <FeaturedRooms />
           
        </Layout>
    )
}

export default HomeScreen