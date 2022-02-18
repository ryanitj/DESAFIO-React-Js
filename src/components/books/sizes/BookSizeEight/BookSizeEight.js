import React from 'react';

const BookComponentSizeThree = ({ letterVector, color, ...props }) => {
    return (

        <svg version="1.1" id="Camada_1" x="0px" y="0px"
            viewBox="0 0 72.5 207" enableBackground={'0 0 72.5 207'} >

            <g>
                <g>
                    <path fill={color} d="M63,0c0,14.4,0,30.6,0,45h-9v9h-9v-9c-4.5,0-13.5,0-18,0v9h-9v-9H9C9,30.6,9,14.4,9,0H0c0,65.9,0,132.1,0,198
			h9v9c17.5,0,36.5,0,54,0v-9h9c0-65.9,0-132.1,0-198H63z"/>
                    <path fill={'#E7DFEF'} d="M54,0C39.6,0,23.4,0,9,0c0,14.4,0,30.6,0,45h9v9c11.3,0,24.7,0,36,0v-9h9c0-14.4,0-30.6,0-45H54z" />
                </g>
                <g>
                    <path d={letterVector} />
                </g>
            </g>
        </svg>


    );
}
export default BookComponentSizeThree;