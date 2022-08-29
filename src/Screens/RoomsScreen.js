import React from 'react'
import Layout from '../Components/Layout/Layout'
import Reward from '../Components/Reward/Reward'
import TextMap from '../Components/Reward/TextMap'
import Room from '../Components/Rooms/Room'
import Rooms from '../Components/Rooms/Rooms'


const RoomsScreen = () => {
    return (
        <Layout>
            <Rooms />
            <Room />
        </Layout>

    )
}

export default RoomsScreen