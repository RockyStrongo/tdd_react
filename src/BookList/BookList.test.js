import React from "react";
import { render } from "@testing-library/react";

import Booklist from "./BookList";

describe("Booklist", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };
    const { container } = render(<Booklist {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading");
  });
  it("error", () => {
    const props = {
      error: true,
    };
    const { container } = render(<Booklist {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error");
  });
  it("renders books", () => {
    const props = {
      books: [
        {
          id: 1,
          name: "Refactoring",
        },
        {
          id: 2,
          name: "Domain-driven Design",
        },
      ],
    };
    const { container } = render(<Booklist {...props} />);
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain-driven Design"]);
  });
});
