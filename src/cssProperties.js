// cssProperties.js
// ----------------------------------------------
// A helper module that exposes an array of strings
// in the form "<property>: <example‑value>;" for every
// known CSS property (~500+).  You can import it anywhere
// in your Vite + React project and iterate over the array
// to render buttons/cards that copy the snippet directly
// to the clipboard.
//
// 👉 Prerequisite (once):
// npm i known-css-properties
// ----------------------------------------------

import { all as properties } from 'known-css-properties';

/**
 * Very‑simple heuristic to choose a reasonable example value
 * based on the property name.  Tweak as you like — it’s just
 * meant to give users something valid to start with once
 * the snippet is copied.
 */
function defaultValue(prop) {
  // Anything length‑like gets 2 px
  if (/\b(width|height|size|top|bottom|left|right|margin|padding|gap|radius|thickness|offset|indent|spacing|inset)\b/i.test(prop)) {
    return '2px';
  }
  // Colors
  if (/color/i.test(prop)) {
    return '#000';
  }
  // Time‑based
  if (/(duration|delay|time)\b/i.test(prop)) {
    return '0.3s';
  }
  // Font sizing
  if (/^font-size$/i.test(prop)) {
    return '16px';
  }
  // Line heights
  if (/^line-height$/i.test(prop)) {
    return '1.5';
  }
  // Styles and borders
  if (/style$/i.test(prop)) {
    return 'solid';
  }
  // Positioning/box alignment
  if (/(align|justify)/i.test(prop)) {
    return 'center';
  }
  if (prop === 'display') {
    return 'block';
  }
  if (prop === 'position') {
    return 'relative';
  }
  // Fallback
  return 'initial';
}

/**
 * Array of ready‑to‑copy snippets, e.g. "margin: 2px;"
 */
export const cssPropertySnippets = properties.map(
  (prop) => `${prop}: ${defaultValue(prop)};`
);

// For convenience, you can also export the raw list if you need it.
export const cssPropertyNames = [...properties];

// ----------------------------------------------
// Example usage (remove if not needed):
// ----------------------------------------------
// import { cssPropertySnippets } from './cssProperties';
// cssPropertySnippets.forEach((snippet) => {
//   const div = document.createElement('div');
//   div.textContent = snippet;
//   div.onclick = () => navigator.clipboard.writeText(snippet);
//   document.body.appendChild(div);
// });
