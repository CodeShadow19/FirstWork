import logo from './logo.svg';
import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MyRoute from './AppRoute/MyRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
            <MyRoute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
