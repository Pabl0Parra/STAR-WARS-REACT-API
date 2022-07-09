import { render, screen } from "@testing-library/react";
import ShipsList from "../components/ShipsList";

// --- Test Driven Dev -----
// 1. RED (failed) --> create a test that fails
// 2. GREEN (passed) --> write minimun code in order to pass the test
// 3. Refactor --> apply clean code & other good practices (like code smells..)

// Advantages of mocking data instead of using API data:
//  - API calls cost $
//  - API calls are slow
//  - Test relays on external dependencies (API isn´t working, neither the test...)

const mockShips = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

describe("Ships list mount", () => {
  it("must display the ships' list", async () => {
    console.log({ ShipsList });
    render(<ShipsList />);
  });
});

describe("At ShipsList mount", () => {
  it("must display the first 10 ship's names", async () => {
    render(<ShipsList ships={mockShips} />);
    const listItems = screen.getAllByTestId(/item/i);
    expect(listItems.length).toBe(10);
  });
});
