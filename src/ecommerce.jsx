import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/dracula.css";
import "./Editor.css";

export function Ecommerce() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const code = `
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
  `.trim();

  return (
    <div className="outer">
      <div className="intro">
        <h1>E-commerce MERN Workshop</h1>
        <p>
          This simulated editor walks you step by step through building an e-commerce website
          using the MERN stack (MongoDB, Express, React, Node.js).
          Each command and code snippet shown here mirrors real-world developer workflows.
        </p>
      </div>

      <div className="main-container">
        <div className="left">
          <div className="file-explorer">
            <p className="project-title">📁 ecommerce-app</p>
            <ul>
              <li>📄 server.js</li>
              <li>📁 routes
                <ul>
                  <li>📄 productRoutes.js</li>
                </ul>
              </li>
              <li>📁 controllers</li>
              <li>📁 models</li>
              <li>📄 .env</li>
              <li>📄 package.json</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <pre>
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
          <div className="bottom">
            <span className="green-text">&gt; npm start</span><br />
            Starting development server...<br />
            Server running at http://localhost:5000<br />
            MongoDB connected
          </div>
        </div>
      </div>
    </div>
  );
}
