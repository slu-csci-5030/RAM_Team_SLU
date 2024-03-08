// Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import CompanyDescription from '../components/CompanyDescription';

function Home() {
  const history = useHistory();

  const handleLoginButtonClick = () => {
    history.push('/loggedIn'); 
  };

  return (
    <body>
      <CompanyDescription onLoginButtonClick={handleLoginButtonClick} />
    </body>
  );
}

export default Home;
