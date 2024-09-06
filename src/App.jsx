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
import TimerHolder from './site-wide/timer/TimerHolder'
import S24Home from './s24/S24Home';
import F24Home from './f24/F24Home';
import CS571Configurator from './config/configurator';
import PrivacyPolicy from './site-wide/PrivacyPolicy';


function App() {
  return <BrowserRouter basename={CS571Configurator.BASE}>
    <Routes>
      <Route path="/" element={<HomeNav/>}>
        <Route index element={<F24Home />} />
        <Route path="f24" element={<F24Home />} />
        <Route path="s24" element={<S24Home />} />
        <Route path="f23" element={<F23Home />} />
        <Route path="s23" element={<S23Home />} />
        <Route path="auth" element={<BadgerAuthLanding />}>
          <Route index element={<BadgerAuthHome />}/>
          <Route path="otp" element={<BadgerAuthConfirmation/>}/>
          <Route path="manage" element={<BadgerAuthManage/>}/>
        </Route>
        <Route path="exam-timer" element={<TimerHolder/>}/>
        <Route path="*" element={<NoMatch />} />
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
