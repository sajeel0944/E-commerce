"use client"

import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass, faPhone, faCartShopping, faBars, faUser} from '@fortawesome/free-solid-svg-icons'

// faEnvelope ,

const Nave=()=>{
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return(
        <>  
          
        <header className="w-100% border-2 border-black  ">

            <div className="div-1 bg-gray-300 border-2 border-black flex justify-between h-16 items-center">
                 <div className="div-1-1 text-4xl [@media(max-width:450px)]:text-base [@media(max-width:450px)]:w-16">
               <h1>SUK <sup className="text-2xl [@media(max-width:450px)]:text-xs ">PK</sup> </h1>
            </div>

            <div className="div-1-2 h-14 w-6/12  flex  ">
                 <input className="h-10 w-11/12 border-2 border-black mt-1.5  [@media(max-width:450px)]:h-8 [@media(max-width:450px)]:w-10/12 [@media(max-width:450px)]:mt-3" type="search" placeholder="search item" />
                <i className=" text-white bg-blue-700 w-12 h-10 mt-1.5 [@media(max-width:450px)]:h-8 [@media(max-width:450px)]:w-5 [@media(max-width:450px)]:mt-3"> <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 mt-2 text-3xl [@media(max-width:450px)]:text-lg [@media(max-width:450px)]:w-4 [@media(max-width:450px)]:mt-2"/>  </i>
            </div>

             <div className="div-1-3 [@media(max-width:450px)]:-mr-2 [@media(max-width:450px)]:ml-3">
               <a className="text-base flex flex-col text-black cursor-pointer  [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:w-28" href="customer-serivce">
                 <h3>customer serivce</h3>
                 <i className="w-7 text-3xl -ml-[34px] -mt-[15px] text-blue-700 [@media(max-width:450px)]:text-lg [@media(max-width:450px)]:w-5 [@media(max-width:450px)]:-ml-[20px]"> <FontAwesomeIcon icon={faPhone}  /></i>
                 <h4 className="-mt-[20px] "> +92348755653</h4>
               </a>
             </div>

            <div className="div-1-4 w-20 [@media(max-width:450px)]:w-7 ">
               <a href="products">
                <i className=" text-blue-700 cursor-pointer "> < FontAwesomeIcon icon={faCartShopping} className="w-12 text-4xl [@media(max-width:450px)]:text-lg [@media(max-width:450px)]:w-7"/> </i>
               </a>
            </div>
        </div>


        <div className="div-2 border-2 border-black flex justify-between items-center h-20 text-white bg-black ">

              <div className="div-2-1">
                    <h1 className="text-3xl [@media(max-width:450px)]:text-xl [@media(max-width:450px)]:ml-6">Catagories</h1>
              </div>


              <div className="sm:hidden">
                <button className="text-white" onClick={() => setShowMenu(!showMenu)}>
                 <FontAwesomeIcon icon={faBars} className="absolute left-1 top-24 text-2xl" />
               </button>
             </div>


             <div className={`div-2-2 flex space-x-4 sm:block ${showMenu ? "block" : "hidden"} [@media(max-width:450px)]:flex-col `}>
               <ul className="flex  [@media(max-width:450px)]:flex-col [@media(max-width:450px)]:absolute [@media(max-width:450px)]:top-40 [@media(max-width:450px)]:left-0 [@media(max-width:450px)]:bg-white [@media(max-width:450px)]:w-full [@media(max-width:450px)]:h-full [@media(max-width:450px)]:rounded-xl [@media(max-width:450px)]:text-black">
                     <li className="text-2xl flex  hover:bg-gray-600 rounded-xl [@media(max-width:450px)]:mt-4 [@media(max-width:450px)]:text-4xl"><a href="home">Home</a></li>
                     <li className="text-2xl flex ml-16 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:mt-7 [@media(max-width:450px)]:text-4xl hover:bg-gray-600 rounded-xl"><a href="products">Product</a></li>
                     <li className="text-2xl flex ml-16 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:mt-7 [@media(max-width:450px)]:text-4xl hover:bg-gray-600 rounded-xl"><a href="contant">Contant</a></li>
                     <li className="text-2xl flex ml-16 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:mt-7 [@media(max-width:450px)]:text-4xl hover:bg-gray-600 rounded-xl"><a href="about">About</a></li>
                </ul>
            </div>

            <div className="div-2-3 [@media(max-width:450px)]:-ml-12">
              <a className="text-xl flex flex-col cursor-pointer [@media(max-width:450px)]:text-lg" href="my-account-login">
                 <h5>My Account</h5>
                 <i className="w-7 text-3xl -ml-[34px] -mt-[20px] text-blue-700 [@media(max-width:450px)]:text-lg [@media(max-width:450px)]:-ml-5"> <FontAwesomeIcon icon={faUser}/></i>
                 <h3 className="-mt-[20px]">Login</h3>
              </a>
            </div>

             <div className="div-2-4 mr-5 [@media(max-width:450px)]:mr-1">
              <a className="cursor-pointer" href="my-card">
                <h5>My Cart</h5>
                <i className="  text-blue-700 "> <FontAwesomeIcon icon={faCartShopping} className="w-11 text-3xl -ml-[49px] -mt-[29px] [@media(max-width:450px)]:w-16 [@media(max-width:450px)]:mb-3 [@media(max-width:450px)]:text-lg"/> </i>
                <h3 className="-mt-[20px] [@media(max-width:450px)]:-mt-[26px]">$0.00</h3>
              </a>
            </div>
        </div>


</header>

        </>
    )
}

export default Nave




