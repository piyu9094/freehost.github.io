import React, { useRef, useState, useEffect } from 'react'
import Home from '../pages/Home'


export default function Login() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const [showhome, setshowhome] = useState(false)
    const localsighup = localStorage.getItem("Sinup");
    useEffect(() => {
        if (localsighup) {
            setshowhome(true)
        }

    }, [localsighup]);

    const handleclick = () => {
        if (username.current.value && email.current.value && password.current.value) {
            localStorage.setItem("username", username.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("Sinup", email.current.value)
            alert("welcome sighnup successfully")
            window.location.reload()
        }
    }

    return (
        <>
            {showhome ? <Home/>
                :
                
                    <div className='fromcontainer'>
                    <div className='input_space'>
                        <span className='logo'> PIYUSH PRAJAPATI</span><br/>
                        <span className='title'> Register</span>
                        <form>
                        <input type='text' placeholder='username ' ref={username}/> 
                         <input placeholder='email ' type='text' ref={email} />  
                        <input placeholder='password' type='password' ref={password} />
                         <button onClick={handleclick}>Sighup</button>
                        </form>
                        <p> You do have an account? Login</p>
                    </div>
                    </div>
               

            }

        </>
    )
}
