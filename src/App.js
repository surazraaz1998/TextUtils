import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [mode, setMode] = useState('light')


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  } 


  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text here to analyze" mode={mode} />
    </>
  ); 
}

export default App;
