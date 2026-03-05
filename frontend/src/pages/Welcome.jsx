import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            navigate('/');
            return;
        }
        setUsername(storedUsername);
        setTimeout(() => setIsVisible(true), 100);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    const now = new Date();
    const greeting = now.getHours() < 12 ? 'Good Morning' : now.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

    return (
        <div className="welcome-layout">
            {/* Background shapes */}
            <div className="welcome-bg-shape welcome-bg-shape-1"></div>
            <div className="welcome-bg-shape welcome-bg-shape-2"></div>

            <div className={`welcome-container ${isVisible ? 'visible' : ''}`}>
                <div className="welcome-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    Login Successful
                </div>

                <div className="welcome-avatar-ring">
                    <div className="welcome-avatar-inner">
                        {username.charAt(0).toUpperCase()}
                    </div>
                </div>

                <p className="welcome-greeting">{greeting}</p>
                <h1 className="welcome-name" id="welcome-heading">{username}</h1>
                <p className="welcome-desc">You're now signed in to your account. Here's a quick overview of your session.</p>

                <div className="info-cards">
                    <div className="info-card">
                        <div className="info-card-icon info-card-icon--green">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </div>
                        <div>
                            <strong>Authenticated</strong>
                            <span>Credentials verified</span>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon info-card-icon--blue">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                        <div>
                            <strong>Session Active</strong>
                            <span>Secure connection</span>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon info-card-icon--purple">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div>
                            <strong>Just Now</strong>
                            <span>Login timestamp</span>
                        </div>
                    </div>
                </div>

                <button className="btn-logout" id="logout-button" onClick={handleLogout}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Welcome;
