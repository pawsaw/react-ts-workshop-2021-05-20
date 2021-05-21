import { ReactElement } from 'react';
import { useParams } from 'react-router';
import { useBook } from '../../domain/book/useBook';
import { useNavigation } from '../../domain/navigation';
import { BookEditForm } from './BookEditForm/BookEditForm';

export interface BookEditScreenParams {
  isbn: string;
}

export function BookEditScreen(): ReactElement {

  const { isbn } = useParams<BookEditScreenParams>()
  const book = useBook(isbn);
  const { goBack } = useNavigation();

  return <div>
    {
      book ? (
        <BookEditForm book={book} onBookEdited={(book) => {
          console.log('edited', book); 
          goBack();
        }} onCancelClicked={goBack} />
      ) : (
        <div>Loading...</div>
      )
    }
  </div>
}
