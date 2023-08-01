import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import RegistrationForm from './registrationForm';

jest.mock('./AuthApi', () => ({
  useRegisterUserMutation: () => {
    return [
      jest.fn(),
      {
        error: { message: 'mockedErrorMessage' },
        isError: true,
      },
    ];
  },
}));


describe('RegistrationForm', () => {
  test('renders form elements and handles submission', async () => {
    
    render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
    );

    const errorMessage = await screen.findByRole('error');

    expect(errorMessage).toHaveTextContent('mockedErrorMessage / Reload the page');
  });
});

