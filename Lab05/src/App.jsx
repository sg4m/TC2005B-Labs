
import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { Login } from './pages/Login';

// Simple auth for beginners
function RequireAuth({ children, isAuthenticated }) {
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
        <Route index element={<Homepage />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="Dashboard" element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="Reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
