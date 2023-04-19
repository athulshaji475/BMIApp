
import './App.css';
import  Form  from "./components/form";
import Bmiscore from "./components/bmiscore"
import Bmilist from "./components/bmilist"
import { useState } from 'react';

function App() {
 
  const [bmi,setCount] = useState('')
  const [bmitype,setbmitype]=useState('')
  const formData=(w,h)=>{
console.log(w);
console.log(h);
  }


  return (
    <div className="App">
      
      <div>{bmi}</div>
   
      <Form getData={formData}/>
      <Bmiscore bmino={bmi} bmit={bmitype}/>
      <Bmilist/>
    </div>
  );
}

export default App;
