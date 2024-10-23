"use client"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

const Contact=()=>{

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const [showMenu1, setShowMenu1] = useState<boolean>(false);


    const handleBothSubmits = (e: React.FormEvent) => {
        handleSubmit(e);
        handleSubmit1(e);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
      };




      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [city, setCity] = useState('');
      const [email, setEmail] = useState('');
      const [number, setNumber] = useState('');
    
    
    
      const handleSubmit1 = (e: React.FormEvent) => {
        e.preventDefault();
        
       const formData = {
          name,
          address,
          city,
          email,
          number,
        };

       setTimeout(() => {
        
       }, 6000);
};


    return(
        <>
            <form onSubmit={handleBothSubmits}  className={`border-2 border-gray-400 mt-10 w-6/12 ml-80 text-center rounded-sm bg-gray-400 [@media(max-width:450px)]:ml-1 [@media(max-width:450px)]:w-[22.8rem] ${showMenu  ? "hidden" : "block"}`}>

                <input className="w-96 h-9 mt-7 border-2 border-black rounded-xl [@media(max-width:450px)]:w-80" type="text" placeholder="Inter your name"  onChange={(e) => setName(e.target.value)} /> <br/>
                <input className="w-96 h-9 mt-5 border-2 border-black rounded-xl [@media(max-width:450px)]:w-80" type="text" placeholder="Inter your address"  onChange={(e) => setAddress(e.target.value)} /> <br/>
                <input className="w-96 h-9 mt-5 border-2 border-black rounded-xl [@media(max-width:450px)]:w-80" type="text" placeholder="Inter your city name"  onChange={(e) => setCity(e.target.value)} /> <br/>
                <input className="w-96 h-9 mt-5 border-2 border-black rounded-xl [@media(max-width:450px)]:w-80" type="email" placeholder="Inter your email"  onChange={(e) => setEmail(e.target.value)} /> <br/>
                <input className="w-96 h-9 mt-5 border-2 border-black rounded-xl [@media(max-width:450px)]:w-80" type="number" placeholder="Inter your number"  onChange={(e) => setNumber(e.target.value)} /> <br/>

                <div className=" mt-5 flex ml-9 [@media(max-width:450px)]:ml-2 "> 
                    <input className="w-6 h-8 ml-28 cursor-pointer [@media(max-width:450px)]:ml-6 [@media(max-width:450px)]:mr-3" type="checkbox" />
                    <h1 className="ml-4 [@media(max-width:450px)]:-ml-0">ARE YOU SATIFY</h1> 
                </div>

                <button onClick={()=>setShowMenu1(!showMenu1)}  >
                <button className="bg-blue-900 w-32 h-10 rounded-full mt-6 mb-4  hover:bg-white"onClick={() =>     setTimeout(() => {    setShowMenu(!showMenu)   }, 3000) }  ><i><FontAwesomeIcon icon={faSpinner} className={`absolute left-[610px] animate-spin text-xl [@media(max-width:450px)]:left-36 ${showMenu1 ? "block" : "hidden"}`}></FontAwesomeIcon></i>SAVE</button>
                </button>

            </form>

            <div className={`border-2 border-gray-400 mt-10 w-6/12 ml-80 text-center rounded-sm bg-gray-400 [@media(max-width:450px)]:ml-1 [@media(max-width:450px)]:w-[22.8rem] ${ showMenu  ?  "block" : "hidden" }`}>
                 <h1 className='flex mt-8 ml-5' > Name : {name}</h1>
                 <h1 className='flex mt-3 ml-5'>Address : {address}</h1>
                 <h1 className='flex mt-3 ml-5'>City : {city}</h1>
                 <h1 className='flex mt-3 ml-5'>Email : {email}</h1>
                 <h1 className='flex mt-3 mb-5 ml-5'>Number : {number} </h1>

            </div>

        </>
    )
}

export default Contact
