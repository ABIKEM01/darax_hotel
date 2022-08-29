import React from 'react'
import User from './User'
import styles from './Receipt.module.css'

const Users = ({ items }) => {
    console.log('my users', items.results)
    return (
        <div className={styles.ramdonUsers}>
            {
                items.results.map((item, index) => <User item={item} key={index} />)
            }

        </div>
    )
}

export default Users