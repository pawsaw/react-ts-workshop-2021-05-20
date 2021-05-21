import React, { ReactElement } from 'react';
import { Book } from '../../../domain/book';

export interface BookSelected {
  (book: Book): void;
}

export interface BookDetailProps {
  book: Book;
  onBookEditClicked: BookSelected;
  onCancelClicked: BookSelected;
}

export function BookDetail({ book, onBookEditClicked, onCancelClicked }: BookDetailProps): ReactElement {
  const { title, isbn, abstract } = book;
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          isbn: {isbn}
        </p>
        <p>
          {abstract}
        </p>
      </div>
      <button type="button" onClick={() => onBookEditClicked(book)}>Edit</button>
      <button type="button" onClick={() => onCancelClicked(book)}>Canel</button>
    </div>
  )
}
