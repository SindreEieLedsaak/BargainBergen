// LoginPage.test.jsx
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

process.env.VITE_KINDE_CONNECTION_EMAIL_PASSWORD = 'mock_connection_id';

// Mock KindeAuth hooks
const mockLogin = jest.fn();
jest.mock('@kinde-oss/kinde-auth-react', () => ({
  useKindeAuth: () => ({
    login: mockLogin,
  }),
}));

describe('<LoginPage />', () => {

  beforeEach(() => {
    mockLogin.mockClear();
  });

  test('renders login form and handles sign-in', () => {
    render(<LoginPage />);

    const signInWithEmailButton = screen.getByRole('button', { name: 'Sign in with email' });

    fireEvent.click(signInWithEmailButton);

    expect(mockLogin).toHaveBeenCalledWith({
      authUrlParams: {
        connection_id: expect.any(String), 
        login_hint: expect.any(String),
      },
    });
  });
  test('handles sign-in with Google', () => {
    render(<LoginPage />);

    const googleSignInButton = screen.getByRole('button', { name: 'Sign in using Google' });
    fireEvent.click(googleSignInButton);

    expect(mockLogin).toHaveBeenCalledWith({
      authUrlParams: {
        connection_id: process.env.VITE_KINDE_CONNECTION_GOOGLE,
      },
    });
  });

  test('handles sign-in with Facebook', () => {
    render(<LoginPage />);

    const facebookSignInButton = screen.getByRole('button', { name: 'Sign in using Facebook' });
    fireEvent.click(facebookSignInButton);

    expect(mockLogin).toHaveBeenCalledWith({
      authUrlParams: {
        connection_id: process.env.VITE_KINDE_CONNECTION_FACEBOOK,
      },
    });
  });


  // Additional tests for Google and Facebook sign-in can be added here
});
