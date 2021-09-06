import { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';

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

      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <TextForm heading="Enter the text here to analyze" showAlert={showAlert} mode={mode} />  
    </>
  ); 
}

export default App; 
