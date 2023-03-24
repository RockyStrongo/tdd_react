import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";
import { protect } from "./SearchBox";

describe("SearchBox", () => {
  it("renders input", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type = "text"]');
    userEvent.type(input, "domain");
    expect(props.onSearch).toHaveBeenCalled();
  });
  it("trims white spaces", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type = "text"]');
    userEvent.type(input, " ");
    expect(props.onSearch).not.toHaveBeenCalled();
  });
});



//test agnostique à React qui teste uniquement la fonction 

describe("protect function", () => {
  it("does not call onSearch when event value is empty", () => {
    const onSearch = jest.fn();
    const event = { target: { value: "" } };
    protect(event, onSearch);
    expect(onSearch).not.toHaveBeenCalled();
  });
});
