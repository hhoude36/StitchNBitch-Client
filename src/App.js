import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Registermodal from "./Components/Registermodal";
import Loginmodal from "./Components/Loginmodal";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profilepage from "./Pages/Profilepage";
import Grouppage from "./Pages/Grouppage";
import Searchpage from "./Pages/Searchpage";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  function ChangeLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function ChangeUser(theResult) {
    setUser(theResult);
  }

  

  return (
    <Router>
      <Header isLoggedin={isLoggedIn} ChangeLogin={ChangeLogin}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/createuser"
          element={
            <Registermodal
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Loginmodal
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
            />
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Dashboard
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
         
          
            />
          }
        />
        <Route
          path="/Profile"
          element={
            <Profilepage
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
            />
          }
        />
        <Route
          path="/Groups"
          element={
            <Grouppage
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
           
            />
          }
        />
        <Route
          path="/Search"
          element={
            <Searchpage
              user={user}
              setUser={ChangeUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={ChangeLogin}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
