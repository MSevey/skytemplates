import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Learn about Skynet link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn about Skynet/i);
  expect(linkElement).toBeInTheDocument();
});
