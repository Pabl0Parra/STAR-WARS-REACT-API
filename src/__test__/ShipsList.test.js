import { render } from "@testing-library/react";
import ShipsList from "../components/ShipsList";

// --- Test Driven Dev -----
// 1. RED (failed) --> create a test that fails
// 2. GREEN (passed) --> write minimun code in order to pass the test
// 3. Refactor --> apply clean code & other good practices (like code smells..)

describe("Ships list mount", () => {
  it("must display the first 10 ships' names", async () => {
    render(<ShipsList />);
  });
});
