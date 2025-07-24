import React, { useState, useEffect } from 'react';
import { jsElementSnippets } from './jselementsnippets';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css'; // Keep your dark theme

const getRandomColor = () => {
  const colors = ['#f87171', '#60a5fa', '#34d399', '#facc15', '#c084fc', '#fb923c', '#38bdf8', '#f472b6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const JsElementViewer = () => {
  const [filter, setFilter] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [colors] = useState(() => jsElementSnippets.map(() => getRandomColor()));

  const filteredSnippets = jsElementSnippets.filter(snippet =>
    snippet.method.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    hljs.highlightAll(); // Re-highlight all <code> blocks
  }, [selectedIndex]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search DOM method..."
        style={styles.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div style={styles.grid}>
        {filteredSnippets.map((snippet, index) => (
          <div
            key={index}
            style={{ ...styles.card, borderColor: colors[index], color: colors[index] }}
          >
            <button
              onClick={() => handleSelect(index)}
              style={{ ...styles.button, color: colors[index] }}
            >
              {snippet.method}
            </button>
          </div>
        ))}
      </div>

      {selectedIndex !== null && filteredSnippets[selectedIndex] && (
        <div
          style={{
            ...styles.panel,
            borderColor: colors[selectedIndex],
          }}
        >
          <pre>
            {/* Force remounting using key */}
            <code key={selectedIndex} className="language-javascript">
              {filteredSnippets[selectedIndex].example}
            </code>
          </pre>
          <button
            onClick={() => copyToClipboard(filteredSnippets[selectedIndex].example)}
            style={styles.copyButton}
          >
            📋 Copy
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#1e1e1e',
    minHeight: '100vh',
    padding: '10px',
    fontFamily: 'monospace',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    marginBottom: '10px',
    fontSize: '12px',
    borderRadius: '4px',
    border: '1px solid #444',
    backgroundColor: '#2d2d2d',
    color: '#eee',
    outline: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: '6px',
    alignItems: 'start',
  },
  card: {
    position: 'relative',
    padding: '4px 8px',
    backgroundColor: '#252526',
    borderRadius: '4px',
    border: '1px solid',
    fontSize: '10px',
    transition: 'transform 0.2s',
  },
  button: {
    background: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '12px',
    width: '100%',
    textAlign: 'left',
    padding: '4px 0',
    outline: 'none',
  },
  panel: {
    marginTop: '24px',
    border: '1px solid',
    borderRadius: '6px',
    backgroundColor: '#252526',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  copyButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#333',
    color: 'white',
    padding: '6px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default JsElementViewer;
