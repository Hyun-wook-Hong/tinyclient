import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './Header.scss';
import PageHome from '../../pages/common/Home/PageHome';
import PageAboutMes from '../../pages/common/About/Mes/PageAboutMes';
import PageAboutPlm from '../../pages/common/About/Plm/PageAboutPlm';
import PageCcb from '../../pages/common/Ccb/PageCcb';
import PageEffort from '../../pages/common/Effort/PageEffort';
import PageContact from '../../pages/common/Contact/PageContact';
// 각 페이지에 대한 컴포넌트를 import 해주세요.
// import About from '../About';
// import CCB from '../CCB';
// import Effort from '../Effort';
// import Monitoring from '../Monitoring';
// import Contact from '../Contact';

const Header = () => {
  return (
    <>
      <Router>
        <header id="pcHeader">
          <div className="logo">
            <img src="logo512.png" alt="로고" />
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">ABOUT</button>
                  <div className="dropdown-content">
                    <Link to="/about/mes">MES</Link>
                    <Link to="/about/plm">PLM</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/ccb">CCB</Link>
              </li>
              <li>
                <Link to="/effort">EFFORT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          {/* 각 경로에 대한 컴포넌트를 정의하세요. */}
          <Route path="/" element={<PageHome />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about/mes" element={<PageAboutMes />} />
          <Route path="/about/plm" element={<PageAboutPlm />} />
          <Route path="/ccb" element={<PageCcb />} /> 
          <Route path="/effort" element={<PageEffort />} /> 
          <Route path="/contact" element={<PageContact />} /> 
        </Routes>
      </Router>
    </>
  );
};

export default Header;
