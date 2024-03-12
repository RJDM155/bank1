import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "..//pages/Login";
import Home from "../pages/Home";
import Account from "..//pages/BankAccount";
import Card from "../pages/Card";



function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Home" Component={Home} />
          <Route path="/Account" Component={Account}/>
          <Route path="/Card" Component={Card}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;