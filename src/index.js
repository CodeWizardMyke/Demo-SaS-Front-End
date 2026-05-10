import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './report/reportWebVitals';
import App from './app/App';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </AuthProvider>
);

reportWebVitals();