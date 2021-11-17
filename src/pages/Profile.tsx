import React, {useState, useEffect} from 'react'
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export const Profile = () => {

    const [isAuth, setIsAuth] = useState<Boolean>(true)

    useEffect( () => {
            const authState: any = localStorage.getItem('authdata')
            
            if (authState != 'true') {
                console.log(authState)
                setIsAuth(false)
            }

    }, [])

    return (
        <div>
            {
                isAuth
                ?

                <div>
                    profile
                </div>
                :
                <>
                <Redirect to="/login"/>
                </>
            }

        </div>
    )
}