import React, { useEffect, useState } from "react";
import Booklist from "./BookList";
import axios from "axios";
import { useRemoteService } from "../hooks";
import SearchBox from "../SearchBox/SearchBox";

function BookListContainer() {
  const [term, setTerm] = useState("");

  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books/"
  );

  const onSearch = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term]);

  return (
    <>
      <SearchBox onSearch={onSearch}></SearchBox>
      <Booklist books={data} loading={loading} error={error}></Booklist>
    </>
  );
}

export default BookListContainer;
