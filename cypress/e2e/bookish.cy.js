import axios from "axios";

describe("Bookish application", function () {
  // before(() => {
  //   return axios
  //     .delete("http://localhost:8080/books?_cleanup=true")
  //     .catch((err) => err);
  // });

  // afterEach(() => {
  //   return axios
  //     .delete("http://localhost:8080/books?_cleanup=true")
  //     .catch((err) => err);
  // });

  // beforeEach(() => {
  //   const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

  //   return books.map((item) =>
  //     axios.post("http://localhost:8080/books", item, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //   );
  // });

  it("Has a Bookish heading", function () {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list').should("exist");
    cy.get("div.book-item").should("have.length", 2);
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven Design"]);
    });
  });

  it("Goes to the detail page", function () {
    cy.visit("http://localhost:3000/");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });

  it("Searches for a title", function () {
    cy.visit("http://localhost:3000/");
    cy.get("div.book-item").should("have.length", 2);
    cy.get('[data-test="search"').type("design");
    cy.get("div.book-item").should("have.length", 1);
    cy.get("div.book-item").eq(0).contains("Domain-driven Design");
  });
});
