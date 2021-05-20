import { useState, useEffect } from 'react';
import { Book } from './book';

export function useBookList(): Book[] | null {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {

    let mounted = true;

    const fetchBooks = async () => {
      const response = await fetch('http://localhost:4730/books');
      const _books: Book[] = await response.json();
      if (mounted) {
        setBooks(_books);
      }
    };

    fetchBooks();

    return () => {
      mounted = false;
    };

  }, []);

  return books;
}