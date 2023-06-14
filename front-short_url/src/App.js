import { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState()
  const [shortendUrl, setShortenedUrl] = useState('')

  return (
    <div className="app">
      <div className='title'>
        <h2>URL shortener</h2>
        <h5>System for shortening URL, built in AWS cloud use Serverless Framework</h5>
      </div> 
      <div className='shortener'>
        <form>
          <input
            placeholder='Enter URL'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}/>
          <button>Redirect</button>
        </form>
        {/* Section to view shortened URLS */}
        {/* {shortendUrl &&
          <div className='shortener_view'>
            {shortendUrl}
          </div>
        } */}
      </div>
    </div>
  );
}

export default App;