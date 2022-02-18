import React from 'react';

const BookComponentSizeNine = ({letterVector, color, ...props}) => {
    return (

            <svg version="1.1" id="Camada_1"  x="0px" y="0px"
                viewBox="0 0 72.5 207" enableBackground={'0 0 72.5 207'} >
         
                <g>
                    <g>
                        <path fill={color} d="M63.5,18c0,17.5,0,36.5,0,54h-9v9c-11.3,0-24.7,0-36,0v-9h-9c0-17.5,0-36.5,0-54h-9c0,59.9,0,120.1,0,180h9v9
			c17.5,0,36.5,0,54,0v-9h9c0-59.9,0-120.1,0-180H63.5z"/>
                        <path fill={'#E7DFEF'} d="M54.5,27c-14.4,0-30.6,0-45,0c0,14.4,0,30.6,0,45h9v9c11.3,0,24.7,0,36,0v-9h9c0-14.4,0-30.6,0-45H54.5z" />
                    </g>
                    <g>
                        <path d={letterVector}/>
                    </g>
                </g>
            </svg>
     
    );
}
export default BookComponentSizeNine;