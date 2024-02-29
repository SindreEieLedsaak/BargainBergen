// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; 

describe('App component', () => {
  test('displays the server status message', () => {
    render(<App />);
    expect(screen.getByText(/Server status:/i)).toBeInTheDocument();
  });
});
