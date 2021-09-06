import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enable","success");
    }
  } 


  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Switch>
        <Route path="/about">
           <About/>
        </Route>
        <Route path="/">
           <TextForm heading="Enter the text here to analyze" showAlert={showAlert} mode={mode} />
        </Route>
      </Switch>
      
      
    </Router>
    </>
  ); 
}

export default App;
