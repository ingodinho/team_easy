import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import './App.css'
import "./styles/global/variables.css"
import React, { Fragment } from "react";

function App() {

  return (
      <Fragment>
          <RouterProvider router={router}/>
      </Fragment>
  )
}

export default App
