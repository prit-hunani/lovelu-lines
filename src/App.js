import React from 'react';
import './css/App.css';
import Siteheader from './component/header';
import { BrowserRouter } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Siteheader />
        <Navbar />
    </BrowserRouter>
  );
}

export default App;
