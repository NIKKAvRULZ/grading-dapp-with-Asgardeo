import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import Login from './components/Login';
import LecturerPortal from './components/LecturerPortal';

function App() {
  const { state } = useAuthContext();

  return (
    <main className="App">
      {!state.isAuthenticated ? (
        <Login />
      ) : (
        <LecturerPortal />
      )}
    </main>
  );
}

export default App;