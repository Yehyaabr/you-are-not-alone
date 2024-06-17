import { useState } from "react";
import Header from "./Sections/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Sections/Footer/Footer";

import { Therapist, LogIn, SignUp, Users } from "./Pages/index";

import Container from "./components/Container";
import Test from "./Pages/Test";
import Dashboard from "./Pages/Dashboard";
import TherapistLists from "./Pages/TherapistLists";
import ProfilePage from "./Pages/ProfilePage";

import TherpistProfile from "../src/components/TherpistProfile";

import Sessions from "./Pages/Sessions";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/SignUp" element={<SignUp />} />

            <Route path="/LogIn" element={<LogIn />} />

            <Route path="/therapist" element={<Therapist />} />

            <Route path="/therapistLists" element={<TherapistLists />} />

            <Route path="/therapistprofile/:id" element={<TherpistProfile />} />

            <Route path="/sessions" element={<Sessions />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<Users />} />
            </Route>
            {/* <Route path="/thirpst">
              <Route path="signup" element={<Thirpst />} />
              <Route path=":p" element={<Test />} />
            </Route> */}
          </Routes>
        </Container>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
