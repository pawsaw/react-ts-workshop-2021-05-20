import { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Book } from '../../../domain/book';
import { addDummyBook, fetchBookList, State } from '../../../redux';
import { BookListItem, OnBookListItemClicked } from './BookListItem/BookListItem';

export interface AddDummyBook {
  (): void;
}
export interface BookListProps {
  books: Book[];
  addDummyBook: AddDummyBook;
  onBookListItemClicked: OnBookListItemClicked;
  counter: number;
  loadBooks: () => void;
}

const BookList = ({ books, onBookListItemClicked, addDummyBook, counter, loadBooks }: BookListProps): ReactElement => {

  // const books = useBookList();
  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

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
      <button type="button" onClick={() => addDummyBook()}>Add Dummy Book</button>
      <div>
        Counter value: {counter}
      </div>
    </div>
  );
}

function mapStateToProps(state: State) {
  return {
    books: state.books,
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    addDummyBook: () => dispatch(addDummyBook()),
    loadBooks: () => dispatch(fetchBookList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
