import { ReactElement } from 'react';
import { useParams } from 'react-router';
import { useBook } from '../../domain/book/useBook';
import { useNavigation } from '../../domain/navigation';
import { BookDetail } from './BookDetail/BookDetail';

export interface BookScreenParams {
  isbn: string;
}

export function BookScreen(): ReactElement {

  const { isbn } = useParams<BookScreenParams>()
  const { showEditBook, goBack } = useNavigation();
  const book = useBook(isbn);

  return <div>
    {
      book ? (
        <BookDetail book={book} onBookEditClicked={({ isbn }) => showEditBook(isbn)} onCancelClicked={goBack} />
      ) : (
        <div>Loading...</div>
      )
    }
  </div>
}
