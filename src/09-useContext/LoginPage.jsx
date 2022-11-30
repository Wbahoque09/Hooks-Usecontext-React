import { useContext } from 'react';
import { UserContext } from './context/UserContext';



export const LoginPage = () => {

    const anything = useContext( UserContext );
    console.log(anything);

    return (
        <>

            <h1>LoginPage</h1>
            <hr />

        </>
    )
}

