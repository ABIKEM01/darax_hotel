import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationFlex}>
                <li><Link to='/'><FaInstagram /></Link></li>
                <li><Link to='/rooms'><FaFacebook /></Link></li>
                <li><Link to='/rooms'><FaTwitter /></Link></li>
                <li className={styles.beach}><Link to='/'> <span className={styles.beachResort}>Darax Resort</span></Link></li>
            </ul>
            <span></span>
        </div>
    )
}

export default Footer