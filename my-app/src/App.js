import React, { useState } from "react";

// Import your components/pages
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";

const App = () => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState("login"); // 'login', 'home', 'signup'

  // Function to handle navigation to different pages
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  // Render different pages based on the current page state
  return (
    <div className="App">
      {currentPage === "login" && (
        <LoginPage
          navigateToHomePage={() => navigateToPage("home")}
          navigateToSignUpPage={() => navigateToPage("signup")}
        />
      )}
      {currentPage === "home" && (
        <HomePage navigateToLoginPage={() => navigateToPage("login")} />
      )}
      {currentPage === "signup" && (
        <SignupPage navigateToLoginPage={() => navigateToPage("login")} />
      )}
    </div>
  );
};

export default App;
