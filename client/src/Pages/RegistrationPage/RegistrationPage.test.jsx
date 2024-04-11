// RegistrationPage.test.jsx
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationPage from './RegistrationPage';


process.env.VITE_KINDE_CONNECTION_EMAIL_PASSWORD = 'mock_connection_id';
process.env.VITE_KINDE_CONNECTION_GOOGLE = 'mock_google_connection_id';
process.env.VITE_KINDE_CONNECTION_FACEBOOK = 'mock_facebook_connection_id';


// Mock KindeAuth hooks
const mockRegister = jest.fn();
jest.mock('@kinde-oss/kinde-auth-react', () => ({
  useKindeAuth: () => ({
    register: mockRegister,
  }),
}));

describe('<RegistrationPage />', () => {

  beforeEach(() => {
    mockRegister.mockClear();
  });

  test('renders registration form and handles sign-up', () => {
    render(<RegistrationPage />);

    const emailField = screen.getByPlaceholderText('Email');
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' });

    fireEvent.change(emailField, { target: { value: 'newuser@example.com' } });
    fireEvent.click(signUpButton);

    expect(mockRegister).toHaveBeenCalledWith({
      authUrlParams: {
        connection_id: expect.any(String), 
        login_hint: 'newuser@example.com',
      },
    });
  });

  // More tests can be added for Google and Facebook sign-up
  describe('<RegistrationPage /> Google and Facebook Sign Up', () => {
    beforeEach(() => {
      // Clear all mocks before each test
      mockRegister.mockClear();
    });
  
    test('handles sign-up with Google', () => {
      render(<RegistrationPage />);
  
      const googleSignUpButton = screen.getByRole('button', { name: 'Google' });
      fireEvent.click(googleSignUpButton);
  
      expect(mockRegister).toHaveBeenCalledWith({
        authUrlParams: {
          connection_id: 'mock_google_connection_id',
        },
      });
    });
  
    test('handles sign-up with Facebook', () => {
      render(<RegistrationPage />);
  
      const facebookSignUpButton = screen.getByRole('button', { name: 'Facebook' });
      fireEvent.click(facebookSignUpButton);
  
      expect(mockRegister).toHaveBeenCalledWith({
        authUrlParams: {
          connection_id: 'mock_facebook_connection_id',
        },
      });
    });
  });  
});
