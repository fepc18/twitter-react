import React, { useEffect, useState } from 'react';

import SingInSingUp from './page/SignInSignUp/SingInSingUp';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './utils/contexts';

import {isUserLoggedApi} from './api/auth';

import Routing from './routes/Routing';

export default function App() {

  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLoggedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }
  , [refreshCheckLogin]);

  if(!loadUser) return null;


  //return login page if user is not logged in

  return <AuthContext.Provider value={user}>
    {user ? <Routing setRefreshCheckLogin={setRefreshCheckLogin}  /> : (<SingInSingUp setRefreshCheckLogin={setRefreshCheckLogin} />)}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />   
    <ToastContainer />
  </AuthContext.Provider>;



}


