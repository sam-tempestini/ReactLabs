import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>          
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/about" component={About}/>
      <Route exact path="*" render={()=> <h1>404 – Not Found</h1>} />
    </Switch>
    </div>
  );
}

export default App;
