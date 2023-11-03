import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import F23Home from './f23/F23Home';
import S23Home from './s23/S23Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './site-wide/NoMatch';
import HomeNav from './site-wide/HomeNav';
import BadgerAuthLanding from './badgerauth/BadgerAuthLanding';
import BadgerAuthHome from './badgerauth/BadgerAuthHome';
import BadgerAuthConfirmation from './badgerauth/BadgerAuthConfirmation';
import BadgerAuthManage from './badgerauth/BadgerAuthManage';
import BadgerAuthLoginBadgerId from './badgerauth/BadgerAuthLoginBadgerId';
import BadgerAuthLogoutBadgerId from './badgerauth/BadgerAuthLogoutBadgerId';
import TimerHolder from './site-wide/timer/TimerHolder'
import S24Home from './s24/S24Home';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeNav/>}>
        <Route index element={<F23Home />} />
        <Route path="s24" element={<S24Home />} />
        <Route path="f23" element={<F23Home />} />
        <Route path="s23" element={<S23Home />} />
        <Route path="auth" element={<BadgerAuthLanding />}>
          <Route index element={<BadgerAuthHome />}/>
          <Route path="otp" element={<BadgerAuthConfirmation/>}/>
          <Route path="manage" element={<BadgerAuthManage/>}/>
          <Route path="login" element={<BadgerAuthLoginBadgerId/>}/>
          <Route path="logout" element={<BadgerAuthLogoutBadgerId/>}/>
        </Route>
        <Route path="exam-timer" element={<TimerHolder/>}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
