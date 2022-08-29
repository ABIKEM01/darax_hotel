import React from 'react'
import styles from './DashNavBar.module.css'
import { Link } from 'react-router-dom'

const DashNavBar = () => {
    return (
        <div className={styles.container} >
            <ul>
                <li className={styles.home}><Link to='/dashboard'>Home</Link></li>
                <li className={styles.home}><Link to='receipt'>Receipt</Link></li>
                <li className={styles.home}><Link to='admin'>Administrator</Link></li>
            </ul>
        </div>
    )
}

export default DashNavBar