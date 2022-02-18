import React from 'react';

const BookComponentSizeFive = ({letterVector, color, ...props}) => {
    return (
     
            <svg version="1.1" id="Camada_1"  x="0px" y="0px" viewBox="0 0 72.5 207" enableBackground={'0 0 72.5 207'} >
        
                <g>
                    <path fill={'#E7DFEF'} d="M54,63c-14.4,0-30.6,0-45,0c0,13.8,0,31.3,0,45h9v9c11.3,0,24.7,0,36,0v-9h9c0-13.7,0-31.2,0-45H54z" />
                    <path fill={color} d="M63,54c0,17.5,0,36.4,0,54h-9v9c-11.3,0-24.7,0-36,0v-9H9c0-17.5,0-36.4,0-54H0c0,47.8,0,96.1,0,144h9v9
		c17.5,0,36.5,0,54,0v-9h9c0-47.8,0-96.1,0-144H63z"/>
                    <g>
                        <path d={letterVector}/>
                    </g>
                </g>
            </svg>

    );
}
export default BookComponentSizeFive;