import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode enabled", "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#090e29";
      showAlert("Light mode enabled", "success");
    }
  }

  const showGreen = ()=>{
    document.body.style.backgroundColor = "#1b4404"
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title = "this is title" aboutText = "this is about" mode = {mode} toggleMode = {toggleMode} showGreen = {showGreen}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading = "Add your text to analyze" mode = {mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
