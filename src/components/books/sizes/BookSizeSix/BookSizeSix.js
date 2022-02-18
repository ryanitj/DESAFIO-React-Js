import React from 'react';

const BookComponentSizeOne = ({letterVector, color, ...props}) => {
    return (

            <svg version="1.1" id="Camada_1"  x="0px" y="0px"
                viewBox="0 0 72.5 207" enableBackground={'0 0 72.5 207'} >
            
                <g>
                    <path fill={color}  d="M63,9c0,17.5,0,36.5,0,54c-17.5,0-36.5,0-54,0C9,45.5,9,26.5,9,9H0c0,62.9,0,126.1,0,189h9v9
		c17.5,0,36.5,0,54,0v-9h9c0-62.9,0-126.1,0-189H63z"/>
                    <path fill={'#E7DFEF'} d="M54,18c-14.4,0-30.6,0-45,0c0,14.4,0,30.6,0,45h9v9c11.3,0,24.7,0,36,0v-9h9c0-14.4,0-30.6,0-45H54z" />
                    <g>
                        <path d={letterVector} />
                    </g>
                </g>
            </svg>

      
    );
}
export default BookComponentSizeOne;