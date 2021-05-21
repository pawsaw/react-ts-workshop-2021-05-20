import { Book } from '../domain/book';
import { Action } from './actions';

export interface State {
  books: Book[];
}

export const INITIAL_STATE: State = {
  books: [],
};

export function reducer(state: State = INITIAL_STATE, action: Action): State {

  switch (action.type) {
    
  }

  return state;
}
