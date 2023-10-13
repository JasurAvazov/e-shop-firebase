import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
