import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'
import styles from './Receipt.module.css'
import { MdOutlineAlarm, MdOutlineAccountBox } from 'react-icons/md'
import { FiChevronDown, FiTarget } from 'react-icons/fi'
import { AiOutlineQuestionCircle, AiOutlineLineChart, AiFillHome } from 'react-icons/ai'
import { FaChartPie, FaBed, FaBookDead } from 'react-icons/fa'
import { BsCartCheck, BsDisplay, BsFillPeopleFill, BsFilePost } from 'react-icons/bs'
import { GiSpanner, GiPerson } from 'react-icons/gi'
import { BiBookAdd } from 'react-icons/bi'
import { SiCashapp, SiCodeforces } from 'react-icons/si'
import Users from './Users'

ChartJS.register(ArcElement, Tooltip, Legend);


const Receipt = () => {

    const [state1, setState1] = useState([]);


    useEffect(() => {
        axiosAPI()
    }, [])

    const data = {
        labels: ['Current in House', 'Expected Arrivals', 'Expected Depatures', 'End of Day'],
        datasets: [
            {
                label: '# of Votes',
                data: [59, 42, 45, 59],
                backgroundColor: [
                    '#0096D6',
                    '#e3001f',
                    '#0f9d58',
                    '#3b3141',

                ],
                borderColor: [
                    'rgba(0, 140, 214)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };


    const axiosAPI = async () => {
        const url = 'https://randomuser.me/api/?results=20';
        const config = {
            headers: {
                "Content-Type": "apllication/json",
            }
        }
        try {
            const data = await axios.get(url, config);
            const results = data.data.results
            // console.log(results)

            setState1(results)
            console.log('new state', state1)


        } catch (err) {
            console.log(err)
        }

    }
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.toLocaleString('en-us', { month: 'long' });
    let year = newDate.getFullYear();
    return (
        <div className={styles.dashboard}>
            <div className={styles.containerNav}>
                <div className={styles.Navleft}>
                    <h2 className={styles.beach}>Tech<span className={styles.beachresort}>Darax </span></h2>
                </div>
                <div className={styles.NavRight}>
                    <div className={styles.navIcons}>
                        <MdOutlineAlarm className={styles.Icons} />
                        <p className={styles.action}>Tasks</p>
                    </div>
                    <div className={styles.navIcons}>
                        <FaChartPie className={styles.Icons2} />
                        <p className={styles.action}>Status</p>
                    </div>
                    <div className={styles.navIcons}>
                        <BsCartCheck className={styles.Icons3} />
                        <p className={styles.action}>POS</p>
                    </div>
                    <div className={styles.navIcons}>
                        <FaBed className={styles.Icons4} />
                        <p className={styles.action}>In House</p>
                    </div>
                    <div className={styles.navIcons}>
                        <SiCashapp className={styles.Icons5} />
                        <p className={styles.action}>Front Cash</p>
                    </div>
                    <div className={styles.navIcons}>
                        <SiCodeforces className={styles.Icons6} />
                        <p className={styles.action}>Forcast</p>
                    </div>
                    <div className={styles.navIcons}>
                        <BiBookAdd className={styles.Icons7} />
                        <p className={styles.action}>Booking</p>
                    </div>
                    <div className={styles.navIcons}>
                        <FiTarget className={styles.Icons8} />
                        <p className={styles.action}>Reservation</p>
                    </div>

                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.containerLeft}>
                    <div className={styles.searchdiv}>
                        <h5 className={styles.search}>Search in Menu</h5>
                        <hr className={styles.searchHr} />
                    </div>
                    <div className={styles.actionsflex}>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <MdOutlineAccountBox className={styles.innericons} />
                                <p className={styles.innertext}>Users</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <FaBookDead className={styles.innericons} />
                                <p className={styles.innertext}>Casualty</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <BsDisplay className={styles.innericons} />
                                <p className={styles.innertext}>Reports</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <AiFillHome className={styles.innericons} />
                                <p className={styles.innertext}>Front Desk</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <BsFillPeopleFill className={styles.innericons} />
                                <p className={styles.innertext}>Sales and Marketing</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <GiSpanner className={styles.innericons} />
                                <p className={styles.innertext}>Technical Services</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <BiBookAdd className={styles.innericons} />
                                <p className={styles.innertext}>Accounting</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <GiPerson className={styles.innericons} />
                                <p className={styles.innertext}>House Keeping</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <SiCashapp className={styles.innericons} />
                                <p className={styles.innertext}>Front Cash</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <BsFilePost className={styles.innericons} />
                                <p className={styles.innertext}>POS</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <FiTarget className={styles.innericons} />
                                <p className={styles.innertext}>Reservation</p>
                            </div>
                            <FiChevronDown className={styles.rigthicon} />
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.innerfle}>
                                <AiOutlineQuestionCircle className={styles.innericons} />
                                <p className={styles.innertext}>Help</p>
                            </div>
                            {/* <FiChevronDown className={styles.rigthicon} /> */}
                        </div>
                        <div>
                            <p className={styles.admin}>HOTELID: 14785 -admin-28.04.2022</p>
                        </div>
                    </div>
                </div>

                <div className={styles.containerMiddle}>
                    <div className={styles.middleheaderflex}>
                        <h3 className={styles.middleheaderflextext}>Home</h3>
                        <h3 className={styles.middleheaderflextext}>Expected Arrivals</h3>
                        <h3 className={styles.middleheaderflextext}>Expected Departures</h3>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.cardscontainer}>
                        <div className={styles.cardscover}>
                            <h3 className={styles.status}>Current In House</h3>
                            <h2 className={styles.number}>59</h2>
                            <p className={styles.cardrooms}>Rooms</p>
                            <hr className={styles.cardHr} />
                            <p className={styles.cardTotal}>Total Pax: <span className={styles.cardspan}>137</span></p>
                        </div>
                        <div className={styles.cardscover}>
                            <h3 className={styles.status}>Expected Arrivals</h3>
                            <h2 className={styles.number2}>42</h2>
                            <p className={styles.cardrooms}>Rooms</p>
                            <hr className={styles.cardHr} />
                            <p className={styles.cardTotal}>Total Pax: <span className={styles.cardspan}>141</span></p>
                        </div>
                        <div className={styles.cardscover}>
                            <h3 className={styles.status}>Expected Departures</h3>
                            <h2 className={styles.number3}>45</h2>
                            <p className={styles.cardrooms}>Rooms</p>
                            <hr className={styles.cardHr} />
                            <p className={styles.cardTotal}>Total Pax: <span className={styles.cardspan}>108</span></p>
                        </div>
                        <div className={styles.cardscover}>
                            <h3 className={styles.status}>End of Day</h3>
                            <h2 className={styles.number4}>59</h2>
                            <p className={styles.cardrooms}>Rooms</p>
                            <hr className={styles.cardHr} />
                            <p className={styles.cardTotal}>Total Pax: <span className={styles.cardspan}>117</span></p>
                        </div>
                    </div>
                    <div className={styles.middlecardcontainer}>
                        <div className={styles.middlecardleft}>
                            <p className={styles.middlecardstatus}>Current Status</p>
                            <hr className={styles.middlecardhr} />
                            <div className={styles.middlecardrightflex}>
                                <div className={styles.middlecardspacer}></div>
                                <div className={styles.middlecardscontent}>
                                    <p className={styles.middlecardsroom}>Room</p>
                                    <p className={styles.middlecardspax}>Pax</p>
                                    <p className={styles.middlecardpercent}>Percent</p>
                                </div>
                            </div>
                            <hr className={styles.middlecardhr} />
                        </div>
                        <div className={styles.middlecardrigth}>
                            <p className={styles.middlecardsroom}>Room Status</p>
                            <div className={styles.chartjsd}> <Doughnut data={data} className={styles.chartjsd} /></div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.rigthup}>
                        <h3 className={styles.rigthMonth}>{month}</h3>
                        <h2 className={styles.rightDay}>{date}</h2>
                        <p className={styles.rightyear}>{year}</p>
                    </div>
                    <div className={styles.rigthdown}>

                        <div className={styles.downrow}>
                            <  AiOutlineLineChart className={styles.downicon} /> <p className={styles.downrate}>Exchange Rates</p>
                        </div>
                        <hr className={styles.downhr} />
                        <div className={styles.currencyflex}>
                            <p className={styles.currencyname}>GBP</p>
                            <p className={styles.currencyvalue}>1.0258</p>
                        </div>
                        <div className={styles.currencyflex}>
                            <p className={styles.currencyname}>EUR</p>
                            <p className={styles.currencyvalue}>1.000</p>
                        </div>
                        <div className={styles.currencyflex}>
                            <p className={styles.currencyname}>USD</p>
                            <p className={styles.currencyvalue}>1.020</p>
                        </div>
                        <div className={styles.currencyflex}>
                            <p className={styles.currencyname}>TRY</p>
                            <p className={styles.currencyvalue}>1.1028</p>
                        </div>
                        <div className={styles.currencyflex}>
                            <p className={styles.currencyname}>AUD</p>
                            <p className={styles.currencyvalue}>1.1028</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.ramdonUsers}>
                <table>
                    <thead>
                        <th>S/N</th>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Nationalty</th>
                    </thead>
                    <tbody>
                        {
                            state1.length > 0 && state1.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> <img src={item.picture.large} className={styles.userimage} /></td>
                                    <td> <p className={styles.username}>{item.name.first} {item.name.last}</p></td>
                                    <td> <p className={styles.usergender}>{item.gender} </p></td>
                                    <td> <p className={styles.usergender}>{item.phone} </p></td>
                                    <td> <p className={styles.useremail}>{item.email} </p></td>
                                    <td> <p className={styles.userdate}>{item.dob.date} </p></td>
                                    <td> <p className={styles.userdate}>{item.nat} </p></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Receipt




