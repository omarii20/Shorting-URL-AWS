import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleLongUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleShortUrlChange = (event) => {
    setShortUrl(event.target.value);
  };

  const handleShortenUrl = async () => {
    const API_URL = 'https://38rhg3gt1c.execute-api.us-east-1.amazonaws.com/dev/value';

    try {
      const response = await axios.post(API_URL, {
        type: 'POST',
        url_long: longUrl
      });

      const data = response.data;
      const longerUrl = data.url_long;

      if (!/^https?:\/\//i.test(longerUrl)) {
        setLongUrl(longerUrl);
      }

      setShortUrl(data.url_short);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetOriginalUrl = async () => {
    const API_URL = 'https://38rhg3gt1c.execute-api.us-east-1.amazonaws.com/dev/value';

    try {
      const response = await axios.post(API_URL, {
        type: 'GET',
        url_short: shortUrl
      });

      const data = response.data;
      const longerUrl = data.url_long;

      if (!/^https?:\/\//i.test(longerUrl)) {
        setLongUrl(longerUrl);
      }

      setLongUrl(data.url_long);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className="title">
        <h1>URL Shortener</h1>
        <p>System for shortening URL, built in AWS cloud use Serverless Framework.</p>
      </div>

      <div className="shortener">
        <div>
          <input
            type="text"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={handleLongUrlChange}
          />
          <button type="button" onClick={handleShortenUrl}>
            Shorten
          </button>
        </div>
      </div>

      {shortUrl && (
        <div className="result">
          Short url: 
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}

      <div className="shortener">
        <div>
          <input
            type="text"
            placeholder="Enter short URL"
            value={shortUrl}
            onChange={handleShortUrlChange}
          />
          <button type="button" onClick={handleGetOriginalUrl}>
            Retrieve
          </button>
        </div>
      </div>

      {longUrl && (
        <div className="result">
          Long url:
          <a href={longUrl} target="_blank" rel="noopener noreferrer">
            {longUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
