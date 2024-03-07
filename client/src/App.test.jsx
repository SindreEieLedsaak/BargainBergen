// App.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Service is running' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('App component', () => {
  test('displays the server status message', async () => {
    render(<App />);
    const statusElement = await waitFor(() => screen.getByText(/Server Status/i));
    expect(statusElement).toBeInTheDocument();
  });

  test('displays that the server is up with a message', async () => {
    render(<App />);
    const statusElement = await waitFor(() => screen.getByText(/Server is up: Service is running/i));
    expect(statusElement).toBeInTheDocument();
  });

  test('handles server error response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<App />);
    const statusElement = await waitFor(() => screen.getByText(/Server responded with an error./i));
    expect(statusElement).toBeInTheDocument();
  });

  test('handles server exception', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network error'))
    );

    render(<App />);
    const statusElement = await waitFor(() => screen.getByText(/Server is down or unreachable./i));
    expect(statusElement).toBeInTheDocument();
  });
});
