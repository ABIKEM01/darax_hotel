import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TextMap = () => {
    const [state, setState] = useState({})
    useEffect(() => {
        APIcall()
    }, [])

    const APIcall = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5f8d1daa1b442880d5aaecfec2994d3a`
            const data = await axios.get(url)
            let result = data.data
            console.log('result', result.name)
            console.log(result)
            setState(result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div>
                {
                    <h2>{state.name}</h2>
                }
                <div>
                    {state.main ? <h1>{((state.main.temp - 32) * 5 / 9).toFixed()}°C</h1> : null}
                </div>
                <div>
                    {state.weather ? <p>{state.weather[0].main}</p> : null}
                </div>
                <div>
                    {state.main ? <p className='bold'>{state.main.humidity}%</p> : null}
                </div>
                <div>
                    {state.wind ? <p className='bold'>{state.wind.speed.toFixed()} MPH</p> : null}
                </div>
                <div>
                    {state.main ? <p className='bold'>{state.main.feels_like.toFixed()}°F</p> : null}
                </div>
            </div>

        </>
    )
}

export default TextMap