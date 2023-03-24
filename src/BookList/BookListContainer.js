import React, { useEffect, useState } from "react";
import Booklist from "./BookList";
import axios from "axios";
import { useRemoteService } from "../hooks";

function BookListContainer() {
  const { data, loading, error } = useRemoteService('http://localhost:8080/books/');

  return <Booklist books={data} loading={loading} error={error}></Booklist>;
}

export default BookListContainer;
