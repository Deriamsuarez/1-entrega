import React from 'react'

const QuotesText = ({objStyles, randomQuote}) => {
  return (
    <div className="textContainer">
     <i className="fa-solid fa-quote-right quote" style={objStyles[1]}></i>
    <p style={objStyles[1]}>{randomQuote.quote}</p>
    <p style={objStyles[1]}><b>{randomQuote.author}</b></p>
</div> 
)
}

export default QuotesText