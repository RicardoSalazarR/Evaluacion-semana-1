import React from 'react';
import quotes from '../quotes.json'

const QuoteBox = ({ index, color }) => {
    return (
        <div className='quote-box' style={{ color: color }}>
            <box-icon type='solid' size='lg' name='quote-alt-left' color={color} className="first">
            </box-icon>
            <p className="second">{quotes[index].quote}</p>

            <p className="third">{quotes[index].author}</p>
        </div>
    );
};

export default QuoteBox;