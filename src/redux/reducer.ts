import { Book } from '../domain/book';
import { Action } from './actions';

export interface State {
  loading: boolean;
  books: Book[];
  counter: number;
}

export const INITIAL_STATE: State = {
  loading: false,
  books: [],
  counter: 0,
};

export function reducer(state: State = INITIAL_STATE, action: Action): State {

  switch (action.type) {
    case 'ADD_DUMMY_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          action.book,
        ]
      };
    case 'CHANGE_COUNTER_VALUE':
      return {
        ...state,
        counter: action.value,
      };
    case 'FETCH_BOOK_LIST_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_BOOK_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        books: [
          ...action.books
        ]
      };
  }

  return state;
}
