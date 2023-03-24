import React from "react";

const BookDetail = ({ book, loading, error }) => {
 
  if(loading){
    return <p>Loading</p>
  }
  if(error){
    return <p>Error</p>
  }
 
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">{ book.description ? book.description : book.name}</p>
    </div>
  );
};

export default BookDetail;