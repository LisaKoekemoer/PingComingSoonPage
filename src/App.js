import './App.css';
import logo from './images/logo.svg';
import dashboard from './images/illustration-dashboard.png';
import facebook from './images/facebook-icon.svg';
import twitter from './images/twitter-icon.svg';
import instagram from './images/instagram-icon.svg';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = email => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };

    const isValid = isValidEmail(email);
    if (isValid) {
      alert('We will notify you!');
    } else {
      setError('Please provide a valid email address');
    }
  };


  return (
   <div>
      <img className='logo' src={logo} alt="" />
      <div className='cta'>
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </div>
      <div className='notify'>
        <input 
          type="email" 
          name='email' 
          placeholder='Your Email Address' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'error-input' : ''}
        />
        <button className='notify-btn' type='submit' onClick={handleSubmit}>Notify me</button>
      </div>
      {error && <div className='error-message'>{error}</div>}
      <div className='dashboard'>
        <img src={dashboard} alt="" />
      </div>
      <div className='socials'  >
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
      <p className='copyright'>&copy; Copyright Ping. All rights reserved.</p>
   </div>
  );
}

export default App;
