import { render, screen } from "@testing-library/react";
import Landing from "../pages/index";
import { NAME } from "../utils/variables";

const renderComponent = () => {
  return {
    ...render(<Landing />),
  };
};
describe("Home", () => {
  it("renders shopname", () => {
    renderComponent()
    const shopname = screen.getByText(NAME);
    expect(shopname).toBeInTheDocument();
  });

  it("has shop button", () => {
    renderComponent()
const button = screen.getByRole('link')
expect(button).toBeInTheDocument()
  });

  it("shop button links to shop-page", () => {
    renderComponent()
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', '/shop')
  });
});
