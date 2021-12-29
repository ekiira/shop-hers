import { render, screen } from "@testing-library/react";
import Shop from "../pages/shop";

const renderComponent = () => {
  return {
    ...render(<Shop />),
  };
};
describe("Shop", () => {
  it("shows shop by category text", () => {
    renderComponent();
    const text = screen.getByText("Shop By Category");
    expect(text).toBeInTheDocument();
  });

  it("links to page", () => {
    renderComponent();
    const link = screen.getAllByRole("link");
    expect(link).toHaveLength(4);
  });
});
