import Link from "next/link"
import Image from "next/image"

{/* <Image src={""} alt={""} width={175} height={400}></Image> */}

const Product =()=>{
   
    return(
         <>
            
        <div className="div-main-2 flex justify-between flex-wrap ">
<Link href={"products/apple"}>
<div className="div-img w-60 rounded-xl mt-3 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg"} alt={""} width={175} height={400}  className="h-60 ml-8 mt-2 rounded-xl [@media(max-width:450px)]:h-20 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image>
    {/* <img className="h-60 ml-8 mt-2 rounded-xl [@media(max-width:450px)]:h-20 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Apple Iphone 15 Pro Max  1 Year Warranty</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">  Rs:241,999</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:250000</s></h3>
</div> </Link>

<Link href={"products/Samsung-Galaxy"}>
<div className="div-img w-60 rounded-xl mt-3 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/Samsung-Galaxy-S24-Ultra-EEZEPC-price-in-pakistan-titanium-black-1-1024x1024.webp"} alt={""} width={175} height={400} className="h-60 w-52 ml-4 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image>
    {/* <img  className="h-60 w-52 ml-4 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/Samsung-Galaxy-S24-Ultra-EEZEPC-price-in-pakistan-titanium-black-1-1024x1024.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Samsung Galaxy S23 Ultra Dual SIM - 256GB and 512GB</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:260,000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:270000</s></h3>
</div></Link>

<Link href={"products/TWS-i12"}>
<div className="div-img w-60 rounded-xl mt-3 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/SBT-920-JPG-01.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-20 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image>
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-20 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/SBT-920-JPG-01.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">TWS i12 White S109 & i12 Black </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs. 299</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:500</s></h3>
</div></Link>

<Link href={"products/2Pcs-set"}>
<div className="div-img w-60 rounded-xl mt-3 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44 [@media(max-width:450px)]:mt-9">
    <Image src={"/picture/51MnBa-4wxL._AC_UY1100_.jpg"} alt={""} width={175} height={400}  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/51MnBa-4wxL._AC_UY1100_.jpg" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">2Pcs/set Love Small Square Lovers Fashion Watch Sports LED Electronic Watch </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:3000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:3500</s></h3>
</div></Link>

<Link href={"products/Apple-MacBook"}>
<div className="div-img w-60 rounded-xl mt-3 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44 [@media(max-width:450px)]:mt-9">
    <Image src={"/picture/64c4fb3e273d75524f4a8c2d-hp-stream-14-laptop-intel-celeron.jpg"} alt={""} width={175} height={400} className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/64c4fb3e273d75524f4a8c2d-hp-stream-14-laptop-intel-celeron.jpg" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Apple MacBook Pro MKGQ3 (Space Grey) M1 Chip 8-core CPU 16GB 512GB SSD</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:665,000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:695,000</s></h3>
</div></Link>

<Link href={"products/H.P-ELITEDESK"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44 ">
    <Image src={"/picture/download (1).jfif"} alt={""} width={175} height={400}  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-2 [@media(max-width:450px)]:w-[4.4rem]"></Image>
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-2 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/download (1).jfif" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">H.P ELITEDESK 800 G3 TOWER CORE I5 7TH GEN, 8GB DDR4 RAM, 128GB SSD</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs. 44,900</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:47900</s></h3>
</div></Link>

<Link href={"products/Samsung-Galaxy-Tab"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/images (2).jfif"} alt={""} width={175} height={400}  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/images (2).jfif" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Samsung Galaxy Tab A 2020| 3GB ram| 32GB storage| 5000 Mah battery</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:17,499</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:19000</s></h3>
</div></Link>

<Link href={"products/TCL-40"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/images (3).jfif"} alt={""} width={175} height={400}  className="h-48 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[2.9rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-48 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[2.9rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/images (3).jfif" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">TCL 40 Inch 40L5A Smart Android FHD Google LED TV Netflix YouTube with 2 Years Warranty</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:68,000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:70,000</s></h3>
</div></Link>

<Link href={"products/EKSA"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/images (6).jfif"} alt={""} width={175} height={400}  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-[3.5rem] [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/images (6).jfif" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">EKSA T8 Stereo Gaming Headset For PC, Mobile, PS4/PS5, XBOX </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:1,899</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:2,000</s></h3>
</div></Link>

<Link href={"products/P25-DRONE"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/djimavicairfeat.webp"} alt={""} width={175} height={400} className="h-56 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-56 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/djimavicairfeat.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">P25 DRONE, P14 DRONE Brushless Motors </h5>
    <h3 className="border-2 border-white mt-3 mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:3,570</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:4,000</s></h3>
</div></Link>

<Link href={"products/Action-Camera"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/Best-Cameras-for-Professional-Photography-6.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2  rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2  rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/Best-Cameras-for-Professional-Photography-6.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Action Camera Ultra HD 4K/30fps WiFi 2.0-inch 170D  </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:20,000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:25,000</s></h3>
</div></Link>

<Link href={"products/Itel-ITL-J401"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/oq0u6_512.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/oq0u6_512.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Itel ITL-J401 Sound Star Bluetooth Speaker </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs. 1,859</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:1999</s></h3>
</div></Link>

<Link href={"products/Spigen-LD101"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/spigen_ld101_magnetic_holder_for_cables1-tejar.png"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/spigen_ld101_magnetic_holder_for_cables1-tejar.png" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Spigen LD101 Magnetic Cable Holder </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:11,199</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:13,000</s></h3>
</div></Link>

<Link href={"products/Sony-PS5"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/2d049b680cfade0ed319e688b29902c8.jpg_200x200q75.jpg_.webp"} alt={""} width={175} height={400}  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-52 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/2d049b680cfade0ed319e688b29902c8.jpg_200x200q75.jpg_.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Sony PS5 Disc Marvel Spider Man 2 Limited Edition - Playstation 5 </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs: 225,000</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS: 245,000</s></h3>
</div></Link>

<Link href={"products/Sony-DualSense"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/sony_dualsense_edge_ps5_wireless_controller_2_.jpg"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/sony_dualsense_edge_ps5_wireless_controller_2_.jpg" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Sony DualSense Edge PS5 Wireless Controller </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs: 66,999 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS: 69,999 </s></h3>
</div></Link>

<Link href={"products/Flydigi-Wasp"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss.webp"} alt={""} width={175} height={400}  className="h-48 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-48 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Flydigi Wasp Feelers 5 Fiberglass Finger Sleeve Flexible Glass Fiber Gloves For Mobile Games </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:3,176 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:3,493 </s></h3>
</div></Link>

<Link href={"products/Life-chek"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss1.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss1.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Life chek blood glucose glucometer test suger machine </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:3,176 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:3,493 </s></h3>
</div></Link>

<Link href={"products/Finger-Oximeter"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss2.webp"} alt={""} width={175} height={400} className="h-[13.5rem] ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-[13.5rem] ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss2.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Finger Oximeter Digital Fingertip Pulse Oximeter Blood Oxygen Saturation Meter</h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs: 949 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>RS:2,232 </s></h3>
</div></Link>

<Link href={"products/75CM-Laser"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss3.webp"} alt={""} width={175} height={400}  className="h-[13.5rem] ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-[13.5rem] ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss3.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">75CM Laser Sword Lightsaber Red and Blue Double Saber Rave Transformation </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs: 759 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 3,052 </s></h3>
</div></Link>

<Link href={"products/REDMI-A3"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss4.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss4.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">REDMI A3 || 4GB Ram 128GB Rom || 5000mAh Battery </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs: 23,299 </h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 26,000 </s></h3>
</div></Link>

<Link href={"products/Electric-Drinking"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss5.webp"} alt={""} width={175} height={400} className="h-56 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-56 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss5.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">1 Electric Drinking Qater Pump Small Automatic Drainage Machine Summer </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:681</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 2,092 </s></h3>
</div></Link>

<Link href={"products/KARDINAL"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss6.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" ></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss6.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">KARDINAL High-Quality 3-in-1 Electric Juicer Blender, Grinder </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:2600</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 3000 </s></h3>
</div></Link>

<Link href={"products/Haier"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss7.webp"} alt={""} width={175} height={400} className="h-54 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-54 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss7.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Haier -08kg/ Twin Tub / Semi Automatic/ HWM 80-AS Gear System </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:29499</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 42700 </s></h3>
</div></Link>

<Link href={"products/Haier-HMN"}>
<div className="div-img w-60 rounded-xl mt-9 ml-3 h-96 bg-slate-100 cursor-pointer hover:scale-105 transition-transform duration-700 ease-in-out [@media(max-width:450px)]:w-24 [@media(max-width:450px)]:h-44">
    <Image src={"/picture/ssss8.webp"} alt={""} width={175} height={400} className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]"></Image> 
    {/* <img  className="h-60 ml-4 w-52 mt-2 rounded-xl [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-3 [@media(max-width:450px)]:mt-1 [@media(max-width:450px)]:w-[4.4rem]" src="/picture/ssss8.webp" alt=""/> */}
    <h5 className="font-bold mt-2 [@media(max-width:450px)]:text-[9px] [@media(max-width:450px)]:mt-1 ">Haier HMN-20MXP6 Microwave Oven 20L </h5>
    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:mt-1">Rs:16399</h3>
    <h3 className="border-2 border-white rounded-xl text-orange-500 pl-2 bg-white [@media(max-width:450px)]:text-xs"><s>Rs: 39999 </s></h3>
</div></Link>



</div>

         </>
    )
}

export default Product