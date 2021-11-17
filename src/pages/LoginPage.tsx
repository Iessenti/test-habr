
import { useState } from "react"

import {Redirect} from 'react-router-dom'

interface Form {
    login: string;
    password: string;
}

export const LoginPage = () => {

    const [form, setForm] = useState<Form>({login: '', password: ''})
    const [isError, setIsError] = useState<boolean>(false)
    const [redirect, setRedirect] = useState<boolean>(false)

    const submit = () => {
        if ((form.login === 'Admin') && (form.password === '12345')) {
            localStorage.setItem('authdata', 'true')
            setRedirect(true)
        } else {
            setIsError(true)
            setForm({login: '', password: ''})        
        }
    }

    if (redirect) {
        return <Redirect to='/profile'/>
    }

    return (
            <div>

                <input type='text' value={form.login} onChange={e => setForm({...form, login: e.target.value})} />
                <input type='password' value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
                
                {
                    isError
                    ?
                    <p style={{color: 'red'}}>Имя пользователя или пароль введены неверно</p>
                    :
                    <></>
                }

                <button onClick={() => submit()}>Войти</button>
            </div>
    )
}