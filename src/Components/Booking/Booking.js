import React from 'react'
import styles from './Booking.module.css'

const Booking = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <h2 className={styles.containerLeftTitle}>180+ rooms to choose from</h2>
                <hr className={styles.containerLeftHr} />
                <p className={styles.containerLeftText}>Our rooms are clean and suitable for your standard. We know what you like and we offer what you love</p>
                <button className={styles.containerLeftBtn}>Learn more</button>
            </div>
            <div className={styles.containerRight}>
                <form className={styles.Form}>
                    <h4>Choose a room</h4>
                    <div className={styles.chooseroom}>
                        <label>Choose</label>
                        <select>
                            <option>Choose a room</option>
                            <option>Single</option>
                            <option>Double</option>
                        </select>
                    </div>
                    <div className={styles.chooseDate}>
                        <label>Choose a date</label>
                        <select>
                            <option>Choose a date</option>
                            <option>Single</option>
                            <option>Double</option>
                        </select>
                    </div>
                    <div className={styles.gendercheck}>
                        <div className={styles.genderMale}>
                            <span>Male</span>
                            <div className={styles.maleAction}><span>+</span> <span>2</span><span>-</span></div>
                        </div>
                        <div className={styles.genderFemale}>
                            <span>Female</span>
                            <div className={styles.femaleAction}><span>+</span> <span>2</span><span>-</span></div>
                        </div>
                    </div>
                    <button className={styles.formBtn}>Check availability</button>

                </form>
            </div>
        </div>
    )
}

export default Booking