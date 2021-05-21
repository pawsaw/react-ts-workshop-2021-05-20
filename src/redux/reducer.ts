import { Book } from '../domain/book';

export interface State {
  books: Book[];
}

type Action = {};

export const INITIAL_STATE: State = {
  books: [],
};

export function reducer(state: State = INITIAL_STATE, action: Action): State {

  return state;
}
