
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CompanyDescription from '../components/CompanyDescription';
import { AuthContext } from "../components/AuthContext";

function Home() {
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const handleLoginButtonClick = () => {
    login();
    history.push('/loggedIn');
  };

  return (
    <main>
      <CompanyDescription onLoginButtonClick={handleLoginButtonClick} />
    </main>
  );
}

export default Home;
