import Home from './home';
import About from './about';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div>
          <h1><Link to='/home'>HOME</Link></h1>
          <h1><Link to='/about'>ABOUT</Link></h1>
        </div>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
