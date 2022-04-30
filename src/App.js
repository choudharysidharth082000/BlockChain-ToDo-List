import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"

//filles 
import Form from "./components/Form"


function App() {
  // const loadBlockChain = async () =>
  // {
  //   const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  //   const accounts = await web3.eth.getAccounts();
  //   console.log(accounts);
  
  // }

  // useEffect(()=>
  // {
  //   loadBlockChain();

  // }, [])
  
  return (
   <div className="containor w-screen h-screen flex justify-center items-center flex-col">
     <div className="containorHeader w-75 h-50">
       <h1 className='text-white text-4xl font-medium text-center p-10 md:text-5xl'>Block Chain To Do List App </h1>       
     </div>
     <div className="formContent p-6">
       <Form />
     </div>

   </div>
  );
}

export default App;
