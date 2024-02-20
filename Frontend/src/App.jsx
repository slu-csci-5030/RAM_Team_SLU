// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  return (
   <Router>
      <div className="App">
        <Header />
        <Switch>
           <Route path="/" component={Home} />
        </Switch>
      </div>
      </Router>

  );
}

export default App;
