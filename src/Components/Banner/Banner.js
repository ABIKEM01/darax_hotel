import React, { useContext, useState } from 'react'
import styles from './Banner.module.css'
import GlobalContext from '../../Context'
import { Link } from 'react-router-dom'

const Banner = () => {
    const initial = ["We are here to serve you better", "Our customers are king", "Enjoy the royal treatments"]
    const [state, setState] = useState(initial)
    const [text, setText] = useState({ count: 0 })

    setTimeout(() => {
        slider()
    }, 4000)

    const slider = () => {
        setText({
            count: text.count === state.length - 1 ? 0 : text.count + 1
        })
    }

    const { getSingleroom } = useContext(GlobalContext)
    return (
        <div className={styles.bannerContainer}>

            <div className={styles.bannerContainerInner}>
                <h1 className={styles.bannerTitle}>Luxurious Rooms</h1>
                {state.map((item, index) => (
                    <div key={index}>
                        {text.count === index && <h1 className={styles.dynamic}>{item}<span className={styles.copy}>...</span></h1>}
                    </div>
                ))}
                <hr className={styles.bannerHr} />
                <p className={styles.bannerRoom} >Deluxe Rooms At $299</p>
                <Link to={'/rooms'}>
                    <button className={styles.bannerBtn} onClick={() => getSingleroom()}>OUR ROOMS</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner