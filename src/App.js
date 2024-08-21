import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Layout/HomePage';
import About from './Layout/Projects';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/Projects">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
