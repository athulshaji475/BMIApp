import React from "react";
import { useState } from "react";

function Form({getData}) {
  const [weight, setWeight] = useState(1); //variable and function for setweight usestate
  const [height, setHeight] = useState(0); //""
  const [alert, setAlert] = useState(false);
  const OnSubmit = (e) => {
    e.preventDefault(); //to avoid re freshing while click re-submit

    //checking is this a alfrbrt
    
    if (isNaN(height) || isNaN(weight)) {
      setAlert(true);
      console.log("Alfebets Not allowed");
    } else 
    {
      getData(height,weight)
      setAlert(false);
    }
  };
 

  return (
    <div className="boxshadow">
      <div className="container mt-5">
        <h1>BMi CalCulator</h1>
        <form onSubmit={OnSubmit}>
          <div className="form-group">
            <div className="bmiform">
              <label for="weight">Weight(Kg)</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                required
                value={weight} //value of input set as the weight
                onChange={(e) => {
                  setWeight(e.target.value);
                }} //while we change the values triger setweight function and
                //set the weight as target controls walue
              />

              <label for="height">Height(m)</label>
              <input
                type="height"
                className="form-control"
                id="height"
                name="height"
                required
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-group"></div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br></br>
        {alert && <div className="alert alert-danger">"Alfebets Not allowed"</div>} 
      </div>
      <br></br>
    </div>
  );
}

export default Form;
