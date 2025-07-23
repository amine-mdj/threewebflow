import React, { useState } from 'react';
import { htmlTagSnippets } from './htmlTags'; // Make sure you have this file like cssPropertySnippets

function getRandomColor() {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return `rgb(${r}, ${g}, ${b})`;
}

const HtmlTagViewer = () => {
  const [filter, setFilter] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (tag, index) => {
    navigator.clipboard.writeText(tag);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const filteredTags = htmlTagSnippets.filter((tag) =>
    tag.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Filter tags (e.g. div)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.input}
      />
      <div style={styles.container}>
        {filteredTags.map((tag, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              color: getRandomColor(),
              borderColor: getRandomColor(),
            }}
            onClick={() => handleCopy(tag, index)}
          >
            {tag}
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
    gap: '8px', // slightly bigger gap for clarity
    justifyContent: 'center',
  },
  card: {
    position: 'relative',
    padding: '6px 12px', // increased padding
    backgroundColor: '#252526',
    borderRadius: '4px',
    border: '1px solid',
    cursor: 'pointer',
    fontSize: '13px', // increased font size
    transition: 'transform 0.2s',
  },
  copied: {
    position: 'absolute',
    top: '-14px',
    right: '4px',
    fontSize: '9px',
    color: '#0f0',
    backgroundColor: '#111',
    padding: '2px 5px',
    borderRadius: '4px',
  },
};

export default HtmlTagViewer;
