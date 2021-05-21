import { ReactElement } from 'react';
import { useNavigation } from '../../domain/navigation';
import { BookList } from './BookList/BookList';

export interface BooksScreenProps {
  title?: string;
}

export function BooksScreen({ title = 'Booklist' }: BooksScreenProps): ReactElement {
  
  const { showBook } = useNavigation();
  
  return <div>
    <h2>{title}</h2>
    <BookList onBookListItemClicked={({ isbn }) => showBook(isbn)} />  
  </div>
}