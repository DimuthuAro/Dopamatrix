import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const hardcodedEmail = '1@1';
    const hardcodedPassword = '1234';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        if (email === hardcodedEmail && password === hardcodedPassword) {
            alert('Login successful');
            localStorage.setItem('token', '1234');
            navigate('/');
        } else {    
            alert('Login failed');
        }
    };

    return (
        <div className="container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
