  // App.js
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Header from './components/Header';
  import Home from './pages/Home';
  import CompanyDescription from './components/AssetManagement';
  import Footer from './components/Footer';
import AssetManagement from './components/AssetManagement';

  function App() {
    return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loggedIn" component={AssetManagement} />
          </Switch>
          <Footer />
        </div>
        </Router>

    );
  }

  export default App;
