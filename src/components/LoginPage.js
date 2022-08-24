import { useState } from 'react';

export default function LoginPage () {

    return (
        <div className="page" id="login-page">

            <h2>Login</h2>
            <form className="login-form">
                <label>
                    Email:
                    <input type="text" name="email" placeholder="johnappleseed@email.com" onChange={(e)=>{console.log(e.target.value)}} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" placeholder="********" onChange={(e)=>{console.log(e.target.value)}} />
                </label>
            </form>
            <button>Sign Up.</button>
        </div>
    )
}