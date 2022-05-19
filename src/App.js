import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import NotFound from "./Pages/NotFound/NotFound";

import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/PrivateRoute";
import Authentication from "./Pages/Authentication";
import RegistrationForm from "./Components/Forms/RegistraionForm";
import LoginForm from "./Components/Forms/LoginForm";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/auth" element={<Authentication />}>
              <Route path="registration" element={<RegistrationForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
