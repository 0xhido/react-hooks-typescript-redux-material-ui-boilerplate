import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
