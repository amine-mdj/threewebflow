// CssPropertyViewer.jsx
import React, { useState } from 'react';
import { cssPropertySnippets } from './cssProperties';

// Function to generate random colors
function getRandomColor() {
  const r = Math.floor(Math.random() * 156) + 100; // 100–255 range
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return `rgb(${r}, ${g}, ${b})`;
}

const CssPropertyViewer = () => {
  const [filter, setFilter] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (snippet, index) => {
    navigator.clipboard.writeText(snippet);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const filteredSnippets = cssPropertySnippets.filter((snippet) =>
    snippet.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Filter properties (e.g. grid)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.input}
      />
      <div style={styles.container}>
        {filteredSnippets.map((snippet, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              color: getRandomColor(),
              borderColor: getRandomColor(),
            }}
            onClick={() => handleCopy(snippet, index)}
          >
            {snippet}
            {copiedIndex === index && (
              <span style={styles.copied}>Copied!</span>
            )}
          </div>
        ))}
      </div>
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    justifyContent: 'center',
  },
 card: {
  position: 'relative',
  padding: '6px 12px', // more padding
  backgroundColor: '#252526',
  borderRadius: '4px',
  border: '1px solid',
  cursor: 'pointer',
  fontSize: '13px', // bigger text
  minWidth: '80px', // optional: ensures buttons don’t shrink too much
  textAlign: 'center', // optional: center text
  transition: 'transform 0.2s',
},
  copied: {
    position: 'absolute',
    top: '-14px',
    right: '4px',
    fontSize: '8px',
    color: '#0f0',
    backgroundColor: '#111',
    padding: '2px 4px',
    borderRadius: '4px',
  },
};

export default CssPropertyViewer;
