import React, { useState } from 'react';

import SingInSingUp from './page/SignInSignUp/SingInSingUp';
import { ToastContainer } from 'react-toastify';

export default function App() {

  const [user, setUser] = useState("Felipe");


  //return login page if user is not logged in

  return <div>{user ? (<SingInSingUp />) : <h1>No estas logeado  </h1>}
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
  </div>;



}


