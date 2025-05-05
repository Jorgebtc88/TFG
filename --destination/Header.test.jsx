import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders all navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Hombres")).toBeInTheDocument();
    expect(screen.getByText("Mujeres")).toBeInTheDocument();
    expect(screen.getByText("Accesorios")).toBeInTheDocument();
  });

  it("toggles search when search button is clicked", () => {
    render(<Header />);
    const searchButton = screen.getByLabelText("Buscar");
    fireEvent.click(searchButton);
    // Add assertions based on your search toggle implementation
  });
});
