// import { memo } from 'react';
import React from 'react'


const Small = React.memo(( {value} ) => {

    console.log('Me dibujo again');

    return (
        
        <small> { value } </small>

    );
});

export default Small;
