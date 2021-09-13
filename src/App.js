import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetailsScreen from './views/Details'
import ListScreen from './views/List'
import './App.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListScreen} />
          <Route exact path="/book/:id" component={DetailsScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
