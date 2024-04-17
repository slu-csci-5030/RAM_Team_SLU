// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import AssetManagement from "./components/AssetManagement";
// import { AuthProvider } from "./components/AuthContext";
// import Footer from "./components/Footer";

// function App() {
// 	return (
// <AuthProvider>
//       <Router>
//         <div className="App">
//           <Header />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/loggedIn" component={AssetManagement} />
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
// 	);
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AssetManagement from "./components/AssetManagement";
import Profile from "./components/Profile";
import { AuthContext } from "./components/AuthContext";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/loggedIn">
              {isAuthenticated ? <AssetManagement /> : <Home />}
            </Route>
            <Route path="/profile">
              {isAuthenticated ? <Profile /> : <Home />}
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
