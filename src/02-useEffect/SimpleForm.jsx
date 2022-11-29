import { useEffect, useLayoutEffect, useState } from "react";
import Message from "./Message";


const SimpleForm = () => {

    const [formState,setformState]= useState({
        username: 'strider',
        email: 'correo@explore.com'
    });
    
    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        // console.log({ name, value });
        setformState({
            ...formState,
            [ name ]: value
        });

    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);

    

    return (
        <>

            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control" 
                placeholder="Username"
                name="username"
                value={ username }
                onChange={onInputChange}
            />

            <input 
                type="text"
                className="form-control mt-2" 
                placeholder="correo@explore.com"
                name="email"
                value={ email }
                onChange={onInputChange}
            />

           {
                (username ==='strider2') &&  <Message />
           }

        </>
    )
}

export default SimpleForm;