import React from 'react';

const Change = ({change, color}) => {
    
    return (
        <div className='change-quote'>
            <button onClick={change} style={{backgroundColor:color}} className="change-btn" >
                <box-icon name='chevron-right' color={'white'} size="md"></box-icon>
            </button>
        </div>
    );
};

export default Change;