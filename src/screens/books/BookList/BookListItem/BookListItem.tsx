import { ReactElement } from 'react';
import { Book } from '../../../../domain/book';

export interface OnBookListItemClicked {
  (book: Book): void;
}

export interface BookListItemProps {
  book: Book;
  onBookListItemClicked: OnBookListItemClicked;
}

export function BookListItem({ book, onBookListItemClicked }: BookListItemProps): ReactElement {
  return (
    <div style={{
      color: 'blue'
    }}>
      <div style={{
        cursor: 'pointer'
      }} onClick={() => onBookListItemClicked(book)}>{book.title}</div>
    </div>
  );
}