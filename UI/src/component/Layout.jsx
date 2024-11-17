import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidenavbar from './Sidenavbar.jsx';
import './layout.css';
import Fotter from './Fotter.jsx';
function Layout() {
  return (<>
<div className="layout">
      <Sidenavbar />
      <div className="content">
        <Outlet />
      </div>
      
    </div>
    <Fotter/>
    </>
  );
};

export default Layout
