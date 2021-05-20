import React, { ReactElement, useState } from 'react';
import { Book } from '../../../domain/book';


export interface OnBookEdited {
  (editedBook: Book): void;
}

export interface BookEditFormProps {
  book: Book;
  onBookEdited: OnBookEdited;
}

export function BookEditForm({ book, onBookEdited }: BookEditFormProps): ReactElement {

  const [isbn, setIsbn] = useState(book.isbn);
  const [title, setTitle] = useState(book.title);

  function onSubmit(): void {
    const editedBook: Book = {
      isbn,
      title
    };

    onBookEdited(editedBook);
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
  </form>
}
