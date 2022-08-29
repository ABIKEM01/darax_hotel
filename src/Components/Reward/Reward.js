import React from 'react'
import styles from './Reward.module.css'
import { MdWarning, MdLock } from 'react-icons/md'
import { AiFillMinusCircle, AiFillGift } from 'react-icons/ai'

const Reward = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperflex}>
                <div className={styles.cardContainer}>
                    <p className={styles.number}>01</p>
                    <AiFillGift className={styles.warning} />
                    <p className={styles.title}>Rewards in BNB</p>
                    <p className={styles.message}>NDswap holders will get rewards in BNB from the transactions of the investors.</p>
                </div>
                <div className={styles.cardContainer}>
                    <p className={styles.number}>02</p>
                    <AiFillMinusCircle className={styles.warning} />
                    <p className={styles.title}>Anti-whales & Anti-snipe protection</p>
                    <p className={styles.messagesecond}>We ensure that investors cannot hold huge amounts of tokens and bots cannot snipe our contract through our protection system.</p>
                </div>
            </div>
            <div className={styles.underflex}>
                <div className={styles.cardContainer}>
                    <p className={styles.number}>03</p>
                    <MdWarning className={styles.warning} />
                    <p className={styles.title}>Anti-dump protection</p>
                    <p className={styles.message}>NDswap holders will be secured from a dump having our manual buy-backs.</p>
                </div>
                <div className={styles.cardContainer}>
                    <p className={styles.number}>04</p>
                    <MdLock className={styles.warning} />
                    <p className={styles.title}>Locked Liquidity</p>
                    <p className={styles.message}>The liquidity will be locked for 2 years which makes our tokens secured.</p>
                </div>

            </div>


        </div>
    )
}

export default Reward