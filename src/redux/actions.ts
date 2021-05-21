import { AnyAction, Dispatch } from 'redux';
import { Book } from '../domain/book';

export type AddDummyBook = {
  type: 'ADD_DUMMY_BOOK',
  book: Book,
};

export type ChangeCounterValue = {
  type: 'CHANGE_COUNTER_VALUE',
  value: number,
}

export type FetchBookListPending = {
  type: 'FETCH_BOOK_LIST_PENDING',
}

export type FetchBookListSuccess = {
  type: 'FETCH_BOOK_LIST_SUCCESS',
  books: Book[],
}

export type Action = AddDummyBook | ChangeCounterValue | FetchBookListPending | FetchBookListSuccess ;

export function addDummyBook(): AddDummyBook {
  return {
    type: 'ADD_DUMMY_BOOK',
    book: {
      isbn: '1234',
      abstract: 'my abstract',
      title: 'my book'
    }
  };  
} 

export function changeCounterValue(value: number): ChangeCounterValue {
  return {
    type: 'CHANGE_COUNTER_VALUE',
    value,
  };
}

export function fetchBookListPending(): FetchBookListPending {
  return {
    type: 'FETCH_BOOK_LIST_PENDING',
  };
}

export function fetchBookListSuccess(books: Book[]): FetchBookListSuccess {
  return {
    type: 'FETCH_BOOK_LIST_SUCCESS',
    books,
  }
}

export interface FetchBookListFunc {
  (dispatch: Dispatch): void;
}

export function fetchBookList() { 
  return (dispatch: Dispatch) => {

    dispatch(fetchBookListPending());

    (async (): Promise<void> => {
      const response = await fetch('http://localhost:4730/books');
      const books: Book[] = await response.json();
      dispatch(fetchBookListSuccess(books));
      
    })()

  };
}


