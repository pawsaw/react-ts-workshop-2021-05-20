import { ISBN } from '../book';

export interface Navigation {
  showCounter(): void;
  showBooks(): void;
  showBook(isbn: ISBN): void;
  showEditBook(isbn: ISBN): void;
  goBack(): void;
}