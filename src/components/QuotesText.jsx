import React from 'react'

const QuotesText = ({objStyles, randomQuote}) => {
    console.log(objStyles)
  return (
    <div className="textContainer">
    <p style={objStyles[1]}>{randomQuote.quote}</p>
    <p style={objStyles[1]}><b>{randomQuote.author}</b></p>
</div> 
)
}

export default QuotesText