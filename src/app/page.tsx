"use client"

import Link from "next/link";
import { SetStateAction, useState } from "react";



const MyForm = () => {

    const [inputValue, setInputValue] = useState('');

   let ea:any="suk@gmail.com";

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setInputValue(e.target.value); 
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault(); 
      console.log(inputValue); 
    };


    let pa:any=2121;
    const [inpValue, setInpValue] = useState('');
  
    const handleInpChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setInpValue(e.target.value); 
    };
  
    const handlepSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault(); 
      console.log(inpValue); 
    };


    const [inputValueus, setInputValueus] = useState('');

    let us:any="sajeel";
    
     const handleInputChangeus = (e: { target: { value: SetStateAction<string>; }; }) => {
      setInputValueus(e.target.value); 
     };
   
     const handleSubmitus = (e: { preventDefault: () => void; }) => {
       e.preventDefault(); 
       console.log(inputValueus); 
     };


    if(inputValue == ea && inpValue == pa && us == inputValueus){
        return(
            <>
              <div className="h-3/4 border-2 w-1/3 absolute left-96 top-20 text-center bg-slate-900 rounded-2xl [@media(max-width:450px)]:left-9 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:h-2/3 [@media(max-width:450px)]:">
              <Link href={"home"}><button className="border-2 mt-48 rounded-2xl w-48 h-12 bg-slate-50 hover:text-white hover:bg-blue-900 hover:scale-105 transition-transform duration-700 ease-in-out">go to home page</button></Link>
              </div>
            </>
        )
    }else{

    }
  
    return (
        <>
        
        <div className="bg-slate-900 absolute left-96 top-20 rounded-2xl text-center h-3/4 border-2 border-black w-1/3 [@media(max-width:450px)]:left-9 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:h-2/3">

      <h1 className="font-bold text-6xl mt-12 text-white"> SUK</h1>

      <form onSubmit={handleSubmit} className="mb-6 mt-20 ">
        <input className="rounded-xl h-9 w-72 border-2 border-black"
          type="email"
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter this email (suk@gmail.com)"
        />
      </form>

      <form onSubmit={handlepSubmit}>
        <input className="rounded-xl h-9 w-72 border-2 border-black"
          type="password"
          value={inpValue} 
          onChange={handleInpChange} 
          placeholder="Enter this password (2121)"
        />
      </form>

      <form onSubmit={handleSubmitus} >
        <input className="rounded-xl h-9 w-72 mt-6 border-2 border-black"
          type="text"
          value={inputValueus} 
          onChange={handleInputChangeus} 
          placeholder="Enter this username (sajeel)"
        />
      </form>

        </div>
        </>
    );
  };
  
  export default MyForm;


