import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import CssPropertyViewer from './CssPropertyViewer';
import HtmlTagViewer from './HtmlTagViewer';
import JsArrayViewer from './JsArrayViewer';
import JsStringViewer from './JsStringViewer';
import JsMathViewer from './JsMathViewer';
import JsElementViewer from './JsElementViewer';
import { Ecommerce } from './ecommerce'; // Import the ecommerce component
import Threeweb from './assets/threeweb.png';
import './App.css';

// Placeholder components
const Placeholder = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h2>{title}</h2>
    <p>Content for {title} coming soon.</p>
  </div>
);



const Home = () => {

  const TerminalIcon = () => (
  <span style={{
    fontFamily: 'monospace',
    marginRight: '8px',
    color: '#00ff88',
    fontWeight: 'bold',
    fontSize: '1.1rem'
  }}>
  
  </span>
);

  return (
<>
<img className='three' src={Threeweb} alt="" />
    <div style={{
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem 2rem',
  position: 'sticky',
  top: 20,
  zIndex: 1000
}}>
  <Link
    to="/ecommerce"
    style={{
      background: '#00ff88',
      color: '#000',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      boxShadow: '0 2px 8px rgba(0, 255, 136, 0.3)'
    }}
  >
    <TerminalIcon />
   &gt;&gt;&gt; How to Ecommerce
  </Link>
</div>




    <div className="home-wrapper">
      <h1 className="home-title">Welcome, Developer 👋</h1>
      <p className="home-description">
        Click on one of the links below to explore all CSS properties, HTML tags, or JavaScript topics.
      </p>

      <div className="home-links">
        <Link to="/css" className="home-link">
          View CSS Properties
        </Link>
        <Link to="/html" className="home-link">
          View HTML Tags
        </Link>
      </div>

      <hr style={{ margin: '3rem 0', border: 'none', borderTop: '3px solid #444', width: '100%' }} />
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#444' }}>🚀 JavaScript</h2>

      <div className="home-links">
        <Link to="/js/react" className="home-link">React</Link>
        <Link to="/js/react-router" className="home-link">React Router</Link>
        <Link to="/js/arrays" className="home-link">JS Arrays</Link>
        <Link to="/js/math" className="home-link">JS Math</Link>
        <Link to="/js/strings" className="home-link">JS Strings</Link>
        <Link to="/js/document" className="home-link">JS Document</Link>
        <Link to="/js/element" className="home-link">JS Element</Link>
        <Link to="/js/events" className="home-link">JS Events</Link>
      </div>
    </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CssPropertyViewer />} />
        <Route path="/html" element={<HtmlTagViewer />} />
        <Route path="/js/react" element={<Placeholder title="React" />} />
        <Route path="/js/react-router" element={<Placeholder title="React Router" />} />
        <Route path="/js/arrays" element={<JsArrayViewer />} />
        <Route path="/js/math" element={<JsMathViewer />} />
        <Route path="/js/strings" element={<JsStringViewer />} />
        <Route path="/js/document" element={<Placeholder title="JS Document" />} />
        <Route path="/js/element" element={<JsElementViewer />} />
        <Route path="/js/events" element={<Placeholder title="JS Events" />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </Router>
  );
};

export default App;
