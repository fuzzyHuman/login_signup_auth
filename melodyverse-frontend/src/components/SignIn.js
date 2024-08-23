import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (isSignUp && !username) errors.username = "Username is required";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const url = isSignUp ? 'http://localhost:8080/api/auth/signup' : 'http://localhost:8080/api/auth/login';
    const body = isSignUp
      ? { username, email, password }
      : { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.ok) {
        // Store JWT in localStorage or sessionStorage
        if (rememberMe) {
          localStorage.setItem('token', data.token);
        } else {
          sessionStorage.setItem('token', data.token);
        }

        // Set the username in your application state
        setUser({ username: data.username });

        // Redirect to homepage
        navigate('/');
      } else {
        setErrors({ form: data.msg });
      }
    } catch (err) {
      console.error('Error during sign-in/sign-up:', err);
      setErrors({ form: 'An error occurred. Please try again.' });
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#000' }}>
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          background: 'url(/images/background-pattern.jpg) no-repeat center center',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: '#fff', fontSize: '3rem', textAlign: 'center' }}>
          Learn Skills in <br /> Python with AI
        </h1>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#1c1c1e',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', color: '#fff' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          {errors.form && <p style={{ color: 'red', textAlign: 'center' }}>{errors.form}</p>}
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '5px',
                    border: '1px solid #333',
                    backgroundColor: '#2c2c2e',
                    color: '#fff',
                  }}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
              </div>
            )}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                {isSignUp ? 'Company Email Address' : 'Enter Company Email Address'}
              </label>
              <input
                type="email"
                placeholder="Enter Company Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '5px',
                  border: '1px solid #333',
                  backgroundColor: '#2c2c2e',
                  color: '#fff',
                }}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '5px',
                  border: '1px solid #333',
                  backgroundColor: '#2c2c2e',
                  color: '#fff',
                }}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: '0.5rem' }}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '5px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
              color: '#aaa',
            }}
          >
            <span>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={toggleSignUp}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </span>
            <span>
              <a
                href="#"
                style={{
                  color: '#007bff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Forgot Password?
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
