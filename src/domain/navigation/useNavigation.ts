import { useHistory } from 'react-router';
import { ISBN } from '../book';
import { Navigation } from './Navigation';

export function useNavigation(): Navigation {

  const history = useHistory();

  return {
    goBack: () => {
      history.goBack();
    },
    showBook: (isbn: ISBN) => {
      history.push(`/books/${isbn}`);
    },
    showEditBook: (isbn: ISBN) => {
      history.push(`/books/${isbn}/edit`);
    },
    showBooks: () => {
      history.push(`/books`);
    },
    showCounter: () => {
      history.push('/counter');
    }

  }
}
