import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Book } from '../../../domain/book';


export interface BookSelected {
  (book: Book): void;
}

export interface BookEditFormProps {
  book: Book;
  onBookEdited: BookSelected;
  onCancelClicked: BookSelected;
}

export function BookEditForm({ book, onBookEdited, onCancelClicked }: BookEditFormProps): ReactElement {

  const [isbn, setIsbn] = useState(book.isbn);
  const [title, setTitle] = useState(book.title);

  useEffect(() => {
    setIsbn(book.isbn);
    setTitle(book.title);
  }, [book.isbn, book.title]);

  function onSubmit(e: FormEvent): void {
    const editedBook: Book = {
      isbn,
      title,
      abstract: ''
    };

    onBookEdited(editedBook);
    e.preventDefault();
  }

  function onTitleChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const { target: { value } } = event;
    setTitle(value);
  }

  function onIsbnChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const { target: { value } } = event;
    setIsbn(value);
  }

  return <form onSubmit={onSubmit}>

    <label htmlFor="title">Title:</label>
    <input type="text" required id="title" name="title" title="title" value={title} onChange={onTitleChanged} />

    <label htmlFor="isbn">isbn:</label>
    <input type="text" required id="isbn" name="isbn" title="isbn" value={isbn} onChange={onIsbnChanged} />

    <button>Absenden</button>
    <button type="button" onClick={() => onCancelClicked(book)}>Abbrechen</button>
  </form>
}
