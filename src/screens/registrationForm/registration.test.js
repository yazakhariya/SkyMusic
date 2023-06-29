import { screen, render } from '@testing-library/react';
import { rest } from "msw";
import {setupServer} from 'msw/node';
import RegistrationForm from './registrationForm';
import { BrowserRouter } from 'react-router-dom';

const BASE_API_URL = 'https://painassasin.online/';

const MockedRegistrationForm = () => {
    <BrowserRouter>
        <RegistrationForm />
    </BrowserRouter>
}

const server = setupServer(
    rest.get(`${BASE_API_URL}/user/signup/`, ( res, ctx) => {
      return res(ctx.json(ctx.status(500)));
    }),
)
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<RegistrationForm />", () => {

    server.use(
        rest.get('/register', (res, ctx) => {
          return res(ctx.status(500));
        }),
    );

    it("handles server error", async () => { 

        render(<MockedRegistrationForm url={"register"} />);

        await screen.findByRole("p");

        expect(screen.getByRole("p")).toHaveTextContent(" / Reload the page ");
    });
   
});