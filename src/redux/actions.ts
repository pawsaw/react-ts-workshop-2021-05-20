import { Book } from '../domain/book';

export type AddDummyBook = {
  type: 'ADD_DUMMY_BOOK',
  book: Book,
};

export type Foo = {
  type: 'Foo',
};

export type Action = AddDummyBook | Foo;

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


