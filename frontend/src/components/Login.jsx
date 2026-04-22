import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import './Login.css';

const Login = () => {
    // Pull the signIn method from Asgardeo
    const { signIn } = useAuthContext();

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-placeholder">💠</div>
                    <h2>Institutional SSO</h2>
                    <p>Secure Academic Grading Enterprise</p>
                </div>

                <div className="login-form">
                    <button onClick={() => signIn()} className="sso-btn">
                        Sign In via WSO2 Asgardeo
                    </button>
                </div>

                <div className="login-footer">
                    <small>
                        Zero-Knowledge Verification Powered<br />
                        <strong>Silent Bridge Middleware</strong>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;