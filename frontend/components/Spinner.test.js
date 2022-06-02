// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from "./Spinner";
import { render } from "@testing-library/react";
import React from "react";

test("renders the spinner-if true renders component", () => {
  const { container } = render(<Spinner on={true} />);
  expect(container.firstChild).toBeTruthy();
});

test("renders the spinner-if false renders null", () => {
  const { container } = render(<Spinner on={false} />);
  expect(container.firstChild).toBe(null);
});
