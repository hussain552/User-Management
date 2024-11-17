import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Layout from './component/Layout.jsx'
import Sidenavbar from './component/Sidenavbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About .jsx'
import Services from './component/Services.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './component/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="services" element={<Services/>}></Route>
      <Route path="contact" element={ <Contact/>}></Route>

    </Route>
  ));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <Sidenavbar/> */}
   
  </StrictMode>,
)
