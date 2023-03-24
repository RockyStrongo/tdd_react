import React from "react";
import { useRemoteService } from "../hooks";
import { useParams } from "react-router-dom";
import BookDetail from "./BookDetail";

const BookDetailContainer = ({ match }) => {
  const { id } = useParams();

  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});

  return <BookDetail book={data}></BookDetail>;
};

export default BookDetailContainer;
