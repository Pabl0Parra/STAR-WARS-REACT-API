import { render, screen } from "@testing-library/react";
import SocialNetworks from "../components/SocialNetworks";

describe("social networks test", () => {
  it("must display 5 links to social networks", async () => {
    render(<SocialNetworks />);
    const LINKS = screen.getAllByRole("link");
    expect(LINKS.length).toBe(5);
  });
});
