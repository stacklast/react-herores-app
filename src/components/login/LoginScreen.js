import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin =(click) =>{
        
        dispatch({
            type: types.login,
            payload:{
                name: 'Edwin'
            }
        });

        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1> Login Screen</h1>
            <hr />
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
