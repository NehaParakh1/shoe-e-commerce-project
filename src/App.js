import React, { useState } from 'react'
import Header from "./component/layout/Header";
import { Fragment } from "react";
import InputForm from "./component/input/InputForm";
import Input from "./component/input/Input";

function App() {
  const[inputDetails,setInputDetails]= useState([])
  
  const addInputHandler=(inputData)=> {
  setInputDetails((prevInputDetails)=>{
    return [...prevInputDetails,{name:inputData.shoename, description:inputData.description, price:inputData.price, sizeL:inputData.sizeL, sizeM:inputData.sizeM, sizeS:inputData.sizeS, id:inputData.id}]
  })
  }


  return (
     <Fragment>
      {console.log(inputDetails)};
<Header/>
<Input onAddInput={addInputHandler}></Input>
<InputForm details={inputDetails}></InputForm>


    </Fragment>
 
  )
}

export default App;
