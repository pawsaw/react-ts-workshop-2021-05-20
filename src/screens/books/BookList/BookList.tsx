import { ReactElement } from 'react';
import { useBookList } from '../../../domain/book';
import { BookListItem, OnBookListItemClicked } from './BookListItem/BookListItem';

export interface BookListProps {
  onBookListItemClicked: OnBookListItemClicked;
}

export function BookList({ onBookListItemClicked }: BookListProps): ReactElement {

  const books = useBookList();

  return (
    <div>
      {
        books ? (
          books.map((book) => (
            <BookListItem key={book.isbn} book={book} onBookListItemClicked={onBookListItemClicked} />
          ))
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  );
}