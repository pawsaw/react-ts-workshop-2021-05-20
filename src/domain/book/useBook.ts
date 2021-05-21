import { useState, useEffect } from 'react';
import { Book } from './book';

export function useBook(isbn: string): Book | null {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {

    let mounted = true;

    const fetchBook = async (): Promise<void> => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const _book: Book = await response.json();
      if (mounted) {
        setBook(_book);
      }
    };

    fetchBook();

    return () => {
      mounted = false;
    };

  }, [isbn]);

  return book;
}
