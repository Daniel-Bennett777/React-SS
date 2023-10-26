import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

// Only use BrowserRouter in this file to wrap the App component
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);