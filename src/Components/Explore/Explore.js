import React from 'react'
import styles from './Explore.module.css'
import { AiOutlineWifi, AiOutlineCar } from 'react-icons/ai'
import { FaCocktail } from 'react-icons/fa'
import { MdNordicWalking, MdComputer, MdRestaurant } from 'react-icons/md'

const Explore = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Explore Our Hotel  Services</h1>
            <div className={styles.exploreflex}>
                <div className={styles.innerExplore}>
                    <AiOutlineWifi className={styles.icons} />
                    <h2>Free wifi</h2>
                </div>
                <div className={styles.innerExplore}>
                    <AiOutlineCar className={styles.icons} />
                    <h2>Free Shuttle Van</h2>
                </div>
                <div className={styles.innerExplore}>
                    <FaCocktail className={styles.icons} />
                    <h2>Free Cocktail</h2>
                </div>
                <div className={styles.innerExplore}>
                    <MdNordicWalking className={styles.icons} />
                    <h2>Endless Hiking</h2>
                </div>
                <div className={styles.innerExplore}>
                    <MdComputer className={styles.icons} />
                    <h2>Easy booking</h2>
                </div>
                <div className={styles.innerExplore}>
                    <MdRestaurant className={styles.icons} />
                    <h2>Restaurant</h2>
                </div>
            </div>
        </div>
    )
}

export default Explore