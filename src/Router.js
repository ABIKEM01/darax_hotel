import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import NotFoundScreen from './Screens/NotFoundScreen'
import RoomScreen from './Screens/RoomScreen'
import RoomsScreen from './Screens/RoomsScreen'
import { Route, Routes, Navigate } from 'react-router-dom'
import BookingScreen from './Screens/BookingScreen'
import DashboardScreen from './Screens/DashboardScreen'
import DashLayout from './Components/Dashboard/DashLayout'
import AdminScreen from './Screens/AdminScreen'
import ReceiptScreen from './Screens/ReceiptScreen'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/rooms' element={<RoomsScreen />} />
            <Route path='/rooms/:slug' element={<RoomScreen />} />

            <Route path='/booking' element={<BookingScreen />} />
            <Route path='/receipt' element={<ReceiptScreen />} />
            <Route path='/dashboard' element={<DashLayout />}>
                <Route path='admin' element={<AdminScreen />} />
                <Route path='receipt' element={<ReceiptScreen />} />
            </Route>
            <Route path='*' element={<Navigate to='./not-found' />} />
        </Routes>
    )
} 

export default Router