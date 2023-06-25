import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import F23Home from './f23/F23Home';
import S23Home from './s23/S23Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthCenter from './site-wide/AuthCenter';
import NoMatch from './site-wide/NoMatch';
import HomeNav from './site-wide/HomeNav';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeNav/>}>
        <Route index element={<F23Home />} />
        <Route path="f23" element={<F23Home />} />
        <Route path="s23" element={<S23Home />} />
        <Route path="auth" element={<AuthCenter />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
