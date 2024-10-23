import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { FaFacebook,FaInstagram ,FaLinkedin,FaGithub} from "react-icons/fa6"



function Footer(){
    return(
        <>
             <div className="div-footer flex border-2 border-slate-900 mt-20 bg-slate-900 text-white  [@media(max-width:450px)]:h-60">

            <div className="div-1 ml-12 mr-24 mt-8  [@media(max-width:450px)]:ml-1 [@media(max-width:450px)]:-mr-2 " >
                <h1 className="mb-5 text-3xl cursor-context-menu [@media(max-width:450px)]:text-xl">Customer <br /> Service</h1>

                <Link href={"help"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">Help</h3></Link>
                <Link href={"contant"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs"> Contact</h3></Link>
                <Link href={"Order-Status"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs"> Order Status</h3></Link>
            </div>

            <div className="div-1 div-1 ml-14 mr-24 mt-8 [@media(max-width:450px)]:-mr-4">
                <h1 className="mb-5 text-3xl cursor-context-menu [@media(max-width:450px)]:text-xl">Company</h1>

                <Link href={"about"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">About</h3></Link>
                <Link href={"Careers"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs"> Careers</h3></Link>
                <Link href={"Privacy"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs"> Privacy</h3></Link>
                <Link href={"Terms"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs"> Terms</h3></Link>
            </div>

            <div className="div-1 div-1 ml-14 mr-8 mt-8 [@media(max-width:450px)]:">
                <h1 className="mb-5 text-3xl cursor-context-menu [@media(max-width:450px)]:text-xl">Account</h1>

                <Link href={"Login-Register"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">Login/Register</h3></Link>
                <Link href={"Account-Dashboard"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">Account Dashboard</h3></Link>
                <Link href={"Address-Book"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">Address Book</h3></Link>
                <Link href={"My-Orders"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">My Orders</h3></Link>
                <Link href={"My-Wishlist"}><h3 className="mt-2 cursor-pointer hover:text-blue-900 [@media(max-width:450px)]:text-xs">My Wishlist</h3></Link>
            </div>

            <div className="div-2 absolute right-14 mt-32  [@media(max-width:450px)]:mt-[9.6rem] [@media(max-width:450px)]:mr-2  [@media(max-width:450px)]:absolute  [@media(max-width:450px)]:left-1">
                
            <ul className="flex mt-12">
                <Link href={"https://www.facebook.com/profile.php?id=100089083026778"} target='_blank'> <li className="mr-5 text-4xl text-blue-800 cursor-pointer [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:mr-4"><FaFacebook/></li> </Link>
                <Link href={"https://www.instagram.com/sajeelullahkhan/"} target='_blank'> <li className="mr-5 text-4xl text-purple-900 cursor-pointer [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:mr-4"><FaInstagram/></li></Link>
                <Link href={"https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"} target='_blank'> <li className="mr-5 text-4xl text-blue-800 cursor-pointer [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:mr-4"><FaLinkedin/></li></Link>
                <Link href={"https://github.com/sajeel0944?tab=repositories"} target='_blank'><li className="mr-5 text-4xl cursor-pointer [@media(max-width:450px)]:text-2xl [@media(max-width:450px)]:mr-4"><FaGithub/></li></Link>
              </ul>

            </div>


        </div>        
        
        </>
    )
}

export default Footer