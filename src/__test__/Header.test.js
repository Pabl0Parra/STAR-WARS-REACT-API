import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header logo", () => {
  it("must display the StarWars logo in header", async () => {
    render(<Header />);

    expect(screen.getByAltText("StarWars").src).toContain("logo");
  });
});

describe("login & sign up buttons", () => {
  it("must display both buttons in header", async () => {
    render(<Header />);

    expect(screen.getByText(/log in/i)).toBeInTheDocument();

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });
});
