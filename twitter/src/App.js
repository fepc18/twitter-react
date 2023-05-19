import React, { useEffect, useState } from 'react';

import SingInSingUp from './page/SignInSignUp/SingInSingUp';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './utils/contexts';

import {isUserLoggedApi} from './api/auth';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(isUserLoggedApi());
  }
  , []);


  //return login page if user is not logged in

  return <AuthContext.Provider value={user}>
    {user ? <h1>Estas logeado  </h1> : (<SingInSingUp />)}
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


