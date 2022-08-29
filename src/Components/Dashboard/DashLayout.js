import React from 'react'
import styles from './DashLayout.module.css'
import DashNavBar from './DashNavBar'
import { Outlet } from 'react-router-dom'

const DashLayout = (props) => {
    return (
        <div style={styles.container}>
            <DashNavBar />
            <div style={styles.main}>
                {<Outlet />}
            </div>
        </div>
    )
}

export default DashLayout