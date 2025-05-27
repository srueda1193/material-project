import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  const handleLogout = () => {

    //hacer logout de firebase
    //navegar al login
    //borrar la informacion del usuario con sesion

  }


  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#f5f5f5",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>🌐 Mi App</h1>

      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <AccountCircle />

        {user ? (
          <>
            <span>{user.firstName}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth/login">Login</Link>
        )}
      </div>


    </header>
  );
};
