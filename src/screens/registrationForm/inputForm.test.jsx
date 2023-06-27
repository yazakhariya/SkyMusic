import InputForm from './inputForm';
import { screen, render } from '@testing-library/react';

describe("<InputForm />", () => { 
    describe("Snapshots tests", () => { 
        it("should render successfully and match snapshot", () => { 
            const { container } = render(<InputForm />); 
            expect(container).toMatchSnapshot(); 
        }); 
    });

    describe("Attributes tests", () => { 
        it("should set type attribute", () => { 
            const type = "text"; 
            render(<InputForm type={type} />); 
            expect(screen.getByPlaceholderText("Почта")).toHaveAttribute("type", type); 
        });
    });
});