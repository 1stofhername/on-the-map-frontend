import { useState } from 'react';

export default function LoginPage ( handleLogin ) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const loginFormData = {
        email: `${email}`,
        password: `${password}`
    }

    function handleEmailChange (e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(loginFormData);

        
    }

    return (
        <div className="page" id="login-page">

            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="name@email.com" onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Log In" />
            </form>
            
            <p>Sign Up.</p>
        </div>
    )
}