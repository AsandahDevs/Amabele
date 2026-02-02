import { render ,screen} from "@testing-library/react"
import Products from "../pages/Products"

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2025-01-01T09:00:00"));
});

jest.mock("../Components/Card", () => {
  return function MockCard(props) {
    return <div data-testid="card">{props.description}</div>;
  };
});

test('renders username on initial load', () => {
  render(<Products formData={{username:'Asanda Majola'}} />)

  expect(screen.getByText(/Good Morning, Asanda Majola/i)).toBeInTheDocument()
})

afterAll(() => {
  jest.useRealTimers();
});