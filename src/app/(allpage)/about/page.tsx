import Link from "next/link"
import { FaFacebook,FaInstagram ,FaLinkedin,FaGithub} from "react-icons/fa6"

const About=()=>{
    return(
         <>
            <h1 className="mt-9 font-bold text-4xl">About Us</h1>

            <h3 className="mt-5 text-2xl leading-9">Welcome to SUK <sup>PK</sup>, your one-stop destination for all your shopping needs. We are 
            dedicated to providing you with the best online shopping experience by offering high-quality products at competitive prices. 
            Our mission is to simplify your shopping journey by offering a wide range of products across various categories, ensuring
             convenience, affordability, and customer satisfaction.we believe in building trust and long-lasting relationships with our
              customers through exceptional service, secure transactions, and fast delivery. Thank you for choosing us as your preferred 
              shopping platform!</h3>

              <ul className="flex mt-12">
              <Link href={"https://www.facebook.com/profile.php?id=100089083026778"} target='_blank'> <li className="mr-5 text-4xl text-blue-800 cursor-pointer"><FaFacebook/></li></Link>
              <Link href={"https://www.instagram.com/sajeelullahkhan/"} target='_blank'><li className="mr-5 text-4xl text-purple-900 cursor-pointer"><FaInstagram/></li></Link>
              <Link href={"https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"} target='_blank'> <li className="mr-5 text-4xl text-blue-800 cursor-pointer"><FaLinkedin/></li></Link>
              <Link href={"https://github.com/sajeel0944?tab=repositories"} target='_blank'><li className="mr-5 text-4xl cursor-pointer"><FaGithub/></li></Link>
              </ul>
        </>
    )
}

export default About