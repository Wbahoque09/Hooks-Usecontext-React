import { useCallback } from 'react';
import { useState } from 'react';
import ShowIncrement from './ShowIncrement';


const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        () =>{
            setCounter( (value) => value + 1 );
        },
        [],
    );

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        
        <>
        
            <h1>useCallback Hook: { counter } </h1>
            <hr />
            
            <ShowIncrement increment={ incrementFather }  /> 

        </>

    )
}

export default CallbackHook;
