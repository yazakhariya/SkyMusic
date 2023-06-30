import { screen, render } from '@testing-library/react';
import { rest } from "msw";
import {setupServer} from 'msw/node';
import RegistrationForm from './registrationForm';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const BASE_API_URL = 'https://painassasin.online/';

const role = "error";

const MockedRegistrationForm = () => {

        <BrowserRouter>
            <RegistrationForm role={role} />
        </BrowserRouter>
    
}

const server = setupServer(
    rest.get(`${BASE_API_URL}/user/signup/`, (res, ctx) => {
      return res(ctx.json(ctx.status(500)));
    }),
)
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<RegistrationForm />", () => {

    server.use(
        rest.get('/user/signup/', (res, ctx) => {
          return res(ctx.status(500));
        }),
    );

    it("handles server error", async () => { 

        render(
            <MockedRegistrationForm />
        );

        await screen.findByRole("error");

        expect(screen.getByRole("error")).toHaveTextContent(" / Reload the page ");
    });
   
});