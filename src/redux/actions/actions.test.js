import { fetchBooks, setSearchTerm } from "./actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Booklist container related actions", () => {
  it("Sets the search keyword", () => {
    const term = "";
    const expected = {
      type: "SET_SEARCH_TERM",
      term,
    };
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  });
  it("Fetches data successfully", () => {
    const books = [
      {
        id: 1,
        name: "Refactoring",
      },
      {
        id: 2,
        name: "Domain-driven Design",
      },
    ];
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));

    const expectedActions = [
      { type: "FETCH_BOOKS_PENDING" },
      { type: "FETCH_BOOKS_SUCCESS", books },
    ];

    const store = mockStore({ books: [] });

    return store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("Fetch data with errors", () => {
    axios.get = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject({ message: "something went wrong" })
      );

    const expectedActions = [
      { type: "FETCH_BOOKS_PENDING" },
      { type: "FETCH_BOOKS_FAILED", err: "something went wrong" },
    ];

    const store = mockStore({ books: [] });

    return store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
