import React, { useState } from 'react';

import SingInSingUp from './page/SignInSignUp/SingInSingUp';

export default function App() {

  const [user, setUser] = useState("Felipe");


  //return login page if user is not logged in

  return <div>{user? (<SingInSingUp/>) : <h1>No estas logeado  </h1> }</div>;

 

}


