import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CategoryCard } from "./CategoryCard";

describe("CategoryCard", () => {
  const mockProps = {
    image: "test-image.jpg",
    title: "Test Category",
  };

  it("renders category title and image", () => {
    render(<CategoryCard {...mockProps} />);
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByAltText("Test Category category")).toHaveAttribute(
      "src",
      "test-image.jpg",
    );
  });
});
