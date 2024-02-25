// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
   <Router>
      <div className="App">
        <Header />
        <Switch>
           <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
      </Router>

  );
}

export default App;
