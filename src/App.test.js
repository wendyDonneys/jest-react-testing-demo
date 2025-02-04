import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el componente Greeting con un saludo personalizado", () => {
  render(<App />);
  const greetingElement = screen.getByText("Hello,Maria!");
  expect(greetingElement).toBeInTheDocument();
});
