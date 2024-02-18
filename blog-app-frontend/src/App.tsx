import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

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
              <Register />
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
