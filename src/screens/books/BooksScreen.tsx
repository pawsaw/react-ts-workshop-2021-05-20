import React, { ReactElement, useState } from 'react';
import { Book } from '../../domain/book/book';
import { BookEditForm } from './BookEditForm/BookEditForm';
import { BookList } from './BookList/BookList';

export interface BooksScreenProps {
  title?: string;
}

export function BooksScreen({ title = 'Booklist' }: BooksScreenProps): ReactElement {
  
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  
  return <div>
    <h2>{title}</h2>
    <BookList onBookListItemClicked={setSelectedBook} />
    {selectedBook ? (
      <BookEditForm book={selectedBook} onBookEdited={(book) => console.log(book)} />
    ) : (<div>
      Select a Book
    </div>)
    }
  </div>
}