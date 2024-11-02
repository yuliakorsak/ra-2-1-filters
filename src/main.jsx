import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Portfolio from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
)
