
import './App.css';
import  Form  from "./components/form";
import Bmiscore from "./components/bmiscore"
import Bmilist from "./components/bmilist"
import { useState } from 'react';

function App() {
 
  const [bmi,setbmi] = useState(0.00)
  const [bmitype,setbmitype]=useState('Not Calculated')

//call back function from chiled component

const formData=(h,w)=>{
 
 
 setbmi(calcBmi(w,h))//here we can call calcbmi function from setbmi usestate function 
  Calcbmilist(calcBmi(w,h))//fucntion return a value that accepts the function


  }


  

// function that calculate bmi
  const calcBmi=(w,h)=> (w/(h*h)).toFixed(2)//if it contain single return we can avoid returrn statement and {}


  //function that calculate bmi list

  const Calcbmilist=(bmi)=>{
if (bmi <=18.1)
{
  setbmitype('Underweight')
}
else if (bmi>=18.1 && bmi<=24.9) {
  setbmitype('Normal weight')
} 

else if (bmi>=25 && bmi<=29.9) {
  setbmitype('Over weight')
} else if(bmi>=30) {

  setbmitype('Obesity')
}
else
{
  setbmitype('Enter Correct Parameters')
}


  }

  


  return (
    <div className="App">
      
      
   
      <Form getData={formData}/>
      <div className='align'>
      <Bmiscore bmino={bmi} bmitype={bmitype}/>
      <Bmilist/>
      </div>
    </div>
  );
}

export default App;
