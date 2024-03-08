import React from 'react';
import { useHistory } from 'react-router-dom';
import CompanyDescription from '../components/CompanyDescription';
import EditAsset from '../components/EditAsset';

function Home() {
  const history = useHistory();

  const handleLoginButtonClick = () => {
    history.push('/loggedIn');
  };

  return (
    <body>
      <CompanyDescription onLoginButtonClick={handleLoginButtonClick} />
      <EditAsset />
    </body>
  );
}

export default Home;