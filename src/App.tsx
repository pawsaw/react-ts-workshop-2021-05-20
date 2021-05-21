import { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { BookScreen } from './screens/book';
import { BookEditScreen } from './screens/book-edit';
import { BooksScreen } from './screens/books';
import { CounterScreen } from './screens/counter';

function Navigation(): ReactElement {

  return (
    <ul>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/books">Books</Link></li>
    </ul>
  );

}

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Redirect exact path="/" to="/books" />
        <Route path="/counter" component={CounterScreen} />
        <Route exact path="/books/:isbn/edit" component={BookEditScreen} />
        <Route exact path="/books/:isbn" component={BookScreen} />
        <Route path="/books" render={() => <BooksScreen title="Computer Science Books" />} />
      </Switch>
    </div>
  );
}

export default App;
