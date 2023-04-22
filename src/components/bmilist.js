import React from 'react'
import Table from 'react-bootstrap/Table';
function bmilist() {
  return (
     
    


    <>
    <Table striped bordered hover style={{marginLeft:"35px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Catogory</th>
          <th>Weight Range</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Normal</td>
          <td>18.5–24.9</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Underweight</td>
          <td>{"<=18.5"}</td>
         
        </tr>
        <tr>
          <td>3</td>
          <td >over weight</td>
          <td>{"25–29.9"}</td>
          
        </tr>
        <tr>
          <td>4</td>
          <td >Obesity </td>
          <td>{">30"}</td>
          
        </tr>
      </tbody>
    </Table>
    </>
 

  )
}

export default bmilist