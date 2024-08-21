import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Layout/HomePage';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
