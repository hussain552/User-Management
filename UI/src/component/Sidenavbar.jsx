import React from 'react';
import {Link} from 'react-router-dom';


function Sidenavbar() {
  return (
    <div className=" flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white">
        <div className="p-4">
        <Link to="/">Dashbord</Link>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/">Home</Link>

            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/about">About Us</Link>

            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/services">Services</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/contact">Contact me</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Area */}

    </div>
  );
}

export default Sidenavbar;
