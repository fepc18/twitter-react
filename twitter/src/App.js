import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default function App() {
  const { user, setUser } = useState(null);

  //return login page if user is not logged in

  //return <div>{user? <h1>Estas logeado</h1> : <h1>No estas logeado</h1>   }</div>;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Alert variant="danger">
          This is a alert—check it out!
        </Alert>
       </div>
  );

}


