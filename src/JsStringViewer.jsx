import React, { useState } from 'react';
import { jsStringSnippets } from './jsStringSnippets';

const getRandomColor = () => {
  const colors = ['#f87171', '#60a5fa', '#34d399', '#facc15', '#c084fc', '#fb923c', '#38bdf8', '#f472b6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const JsStringViewer = () => {
  const [filter, setFilter] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [colors] = useState(() => jsStringSnippets.map(() => getRandomColor()));

  const filteredSnippets = jsStringSnippets.filter(snippet =>
    snippet.method.toLowerCase().includes(filter.toLowerCase())
  );

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
        placeholder="Search array method..."
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
          <pre style={styles.code}>{filteredSnippets[selectedIndex].example}</pre>
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
    gridTemplateColumns: 'repeat(10, 1fr)',
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
  padding: '16px', // more padding
  display: 'flex',
  flexDirection: 'column',
  gap: '12px', // more space between code and button
},
code: {
  color: '#9fefb3',
  backgroundColor: '#111',
  fontSize: '14px', // increased from 10px
  lineHeight: '1.6', // better readability
  whiteSpace: 'pre-wrap',
  margin: 0,
  padding: '12px', // more padding
  borderRadius: '6px',
},
copyButton: {
  alignSelf: 'flex-end',
  backgroundColor: '#333',
  color: 'white',
  padding: '6px 10px', // larger button
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px', // slightly larger font
},
};

export default JsStringViewer;
