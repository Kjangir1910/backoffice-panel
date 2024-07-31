import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ip, setIp] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setIp(response.data.ip);
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIp();
    }, []);

    const signInUser = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setError(""); // Clear error on successful login
        navigate("/todolist", { replace: true });
      } catch (error) {
        setError(error.message);
      }
    };

    return (
      <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <input
        style={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        style={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button style={styles.button} onClick={signInUser}>Login</button>
    </div>
    );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
};

export default Login;