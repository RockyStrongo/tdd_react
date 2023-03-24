import BookDetail from "./BookDetail";
import { render } from "@testing-library/react";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("h2");
    expect(content.innerHTML).toContain("Refactoring");
  });
  it("renders description", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte"
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("p.book-description");
    expect(content.innerHTML).toContain("Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte");
  });
  it("shows book title in description if descr does not exists", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("p.book-description");
    expect(content.innerHTML).toContain("Refactoring");
  });

});
