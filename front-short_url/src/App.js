import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://38rhg3gt1c.execute-api.us-east-1.amazonaws.com/dev',
        { url: inputValue }
      );
      const urlFromResponse = response.data.url;
      window.open(urlFromResponse, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className='title'>
          <h2>URL shortener</h2>
          <h5>System for shortening URL, built in AWS cloud use Serverless Framework</h5>
      </div> 
      <div className='shortener'>
        <form>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleSubmit}>Redirect</button>
        </form>
      </div>
    </div>

  );
}

export default App;
