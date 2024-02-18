import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="auth/login"
          element={
            <Auth>
              <Login />
            </Auth>
          }
        />
        <Route
          path="auth/register"
          element={
            <Auth>
              <h1>Register</h1>
            </Auth>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
