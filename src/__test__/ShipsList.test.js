import { render, screen } from "@testing-library/react";
import ShipsList from "../components/ShipsList";

describe("Ships list mount", () => {
  it("must display the first 10 ships' names", async () => {
    render(<ShipsList />);
  });
});
