import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AssetManagement from "./components/AssetManagement";
import { AuthProvider } from "./components/AuthContext";
import Footer from "./components/Footer";

function App() {
	return (
<AuthProvider>
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
    </AuthProvider>
	);
}

export default App;
