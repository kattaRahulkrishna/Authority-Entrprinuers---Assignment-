import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://authority-entrprinuers-assignment.onrender.com';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const savedUsername = localStorage.getItem('rememberedUsername');
        if (savedUsername) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post(`${API_URL}/login`, { username, password });
            if (response.status === 200) {
                localStorage.setItem('username', username);
                if (rememberMe) {
                    localStorage.setItem('rememberedUsername', username);
                } else {
                    localStorage.removeItem('rememberedUsername');
                }
                navigate('/welcome');
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError('Unable to connect to server. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="split-layout">
            {/* Left Panel — Branding */}
            <div className="brand-panel">
                <div className="brand-content">
                    <div className="brand-logo">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h2 className="brand-title">Authority Entrepreneurs</h2>
                    <p className="brand-tagline">Secure access to your dashboard. Manage your account, track progress, and stay in control.</p>

                    <div className="brand-features">
                        <div className="feature-pill">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Secure Login
                        </div>
                        <div className="feature-pill">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Encrypted
                        </div>
                        <div className="feature-pill">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Fast Access
                        </div>
                    </div>
                </div>

                {/* Decorative circles */}
                <div className="deco-circle deco-circle-1"></div>
                <div className="deco-circle deco-circle-2"></div>
                <div className="deco-circle deco-circle-3"></div>
            </div>

            {/* Right Panel — Login Form */}
            <div className="form-panel">
                <div className="form-container">
                    <div className="form-header">
                        <h1>Sign In</h1>
                        <p>Welcome back! Please enter your credentials.</p>
                    </div>

                    <form onSubmit={handleLogin} className="login-form" id="login-form">
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <div className="field-input">
                                <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <div className="field-input">
                                <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
                                    {showPassword ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="check-label" htmlFor="remember-me">
                                <input id="remember-me" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                <span className="custom-check"></span>
                                Remember username
                            </label>
                        </div>

                        {error && (
                            <div className="alert-error" id="error-message" role="alert">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                {error}
                            </div>
                        )}

                        <button type="submit" className={`btn-primary ${isLoading ? 'loading' : ''}`} id="login-button" disabled={isLoading}>
                            {isLoading ? <span className="spinner"></span> : 'Sign In'}
                        </button>
                    </form>

                    <p className="hint">Demo: <strong>admin</strong> / <strong>admin</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
