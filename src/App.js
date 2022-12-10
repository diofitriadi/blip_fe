import './App.css';
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
