import React from 'react'
import { useState } from 'react'
import quotes from '../json/quotes.json'
import { colors } from '../utils/colors'
import QuotesText from './QuotesText'

const QuoteBox = () => {

    const getRandom = array => {
        const randomElement = Math.floor(Math.random() * array.length)
        return array[randomElement]

    }

    let funRandomQuote = getRandom(quotes)
    let funRandomColor = getRandom(colors)

    const [randomQuote, setRoandomQuote] = useState(funRandomQuote)
    const [randomColor, setRoandomColor] = useState(funRandomColor)

    const objStyles = [
        { backgroundColor: randomColor },
        { color: randomColor }
    ]

    const getRandomAll = () => {
        funRandomQuote = getRandom(quotes)
        funRandomColor = getRandom(colors)

        setRoandomQuote(funRandomQuote)
        setRoandomColor(funRandomColor)
    }

    return (
        <div className="megaContainer" style={{ backgroundColor: randomColor }}>
            <div className="fullContainer">
                <div className="cardContainer">
                    <QuotesText
                    objStyles={objStyles}
                    randomQuote={randomQuote}
                    
                    />
                </div>
                <button onClick={getRandomAll} style={objStyles[0]} className='cardTextButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M23.421,16.583,20.13,13.292a1,1,0,1,0-1.413,1.414L21.007,17A9.332,9.332,0,0,1,14.321,14.2a.982.982,0,0,0-1.408.08L12.9,14.3a1,1,0,0,0,.075,1.382A11.177,11.177,0,0,0,21.01,19l-2.293,2.293A1,1,0,1,0,20.13,22.7l3.291-3.291A2,2,0,0,0,23.421,16.583Z" /><path d="M21.007,7l-2.29,2.29a.892.892,0,0,0-.054.082.992.992,0,0,0,1.467,1.332L21.836,9l1.586-1.585a2,2,0,0,0,.457-2.1,1.969,1.969,0,0,0-.458-.728L20.13,1.3a1,1,0,1,0-1.413,1.413L21.01,5.005c-4.933.012-7.637,2.674-10.089,5.474C8.669,7.937,6,5.4,1.487,5.046L1.006,5a1,1,0,0,0-1,1,1.02,1.02,0,0,0,1,1c.072,0,.287.033.287.033C5.189,7.328,7.425,9.522,9.6,12c-2.162,2.466-4.383,4.7-8.247,4.96l-.4.021a.994.994,0,1,0,.124,1.985c.156-.007.41-.013.535-.023,5.02-.387,7.743-3.6,10.171-6.409C14.235,9.7,16.551,7.018,21.007,7Z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default QuoteBox