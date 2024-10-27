import Image from 'next/image';

function ProductManage({params}: { params: { id: string } }){

    if(params.id == "apple"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg" 
                alt="Apple mobile"
                width={250}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24 '>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Apple Iphone 15 Pro Max  1 Year Warranty</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs:241,999</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>RS:250000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Samsung-Galaxy"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/Samsung-Galaxy-S24-Ultra-EEZEPC-price-in-pakistan-titanium-black-1-1024x1024.webp" 
                alt="Apple mobile"
                width={300}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Samsung Galaxy S23 Ultra Dual SIM - 256GB and 512GB</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs:260,000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>RS:270000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "TWS-i12"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/SBT-920-JPG-01.webp" 
                alt="Apple mobile"
                width={300}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>TWS i12 White S109 & i12 Black</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs. 299</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>RS:500</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "2Pcs-set"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/51MnBa-4wxL._AC_UY1100_.jpg" 
                alt="Apple mobile"
                width={300}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>2Pcs/set Love Small Square Lovers Fashion Watch Sports LED Electronic Watch</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs:3000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>RRs:3500</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Apple-MacBook"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/64c4fb3e273d75524f4a8c2d-hp-stream-14-laptop-intel-celeron.jpg" 
                alt="Apple mobile"
                width={300}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Apple MacBook Pro MKGQ3 (Space Grey) M1 Chip 8-core CPU 16GB 512GB SSD</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs:665,000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:695,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "H.P-ELITEDESK"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/download (1).jfif" 
                alt="Apple mobile"
                width={300}
                height={200} className='ml-10 mt-8 rounded-2xl'/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>H.P ELITEDESK 800 G3 TOWER CORE I5 7TH GEN, 8GB DDR4 RAM, 128GB SSD</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">  Rs. 44,900</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs. 47,900</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>
           
            </div>
            </>
        )
    }else if(params.id == "Samsung-Galaxy-Tab"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/images (2).jfif" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-24 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Samsung Galaxy Tab A 2020| 3GB ram| 32GB storage| 5000 Mah battery</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:17,499</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:19,499</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "TCL-40"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/images (3).jfif" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-24 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>TCL 40 Inch 40L5A Smart Android FHD Google LED TV Netflix YouTube with 2 Years Warranty</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:68,000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:70,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "EKSA"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/images (6).jfif" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-24 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>EKSA T8 Stereo Gaming Headset For PC, Mobile, PS4/PS5, XBOX</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:1,899</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:2000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>
            
            </div>
            </>
        )
    }else if(params.id == "P25-DRONE"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/djimavicairfeat.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-24 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>P25 DRONE, P14 DRONE Brushless Motors</h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:3,570</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:4000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Action-Camera"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/Best-Cameras-for-Professional-Photography-6.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-24 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Action Camera Ultra HD 4K/30fps WiFi 2.0-inch 170D </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:20,000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:25,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Itel-ITL-J401"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/oq0u6_512.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-16 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Itel ITL-J401 Sound Star Bluetooth Speaker </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs. 1,859</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs. 1,999</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Spigen-LD101"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/spigen_ld101_magnetic_holder_for_cables1-tejar.png" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Spigen LD101 Magnetic Cable Holder  </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:11,199</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs. 13,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Sony-PS5"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/2d049b680cfade0ed319e688b29902c8.jpg_200x200q75.jpg_.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Sony PS5 Disc Marvel Spider Man 2 Limited Edition - Playstation 5  </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs: 225,000</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 245,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Sony-DualSense"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/sony_dualsense_edge_ps5_wireless_controller_2_.jpg" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Sony DualSense Edge PS5 Wireless Controller  </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs: 66,999</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 69,999</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Flydigi-Wasp"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Flydigi Wasp Feelers 5 Fiberglass Finger Sleeve Flexible Glass Fiber Gloves For Mobile Games </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:3,176</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:3,493</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Life-chek"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss1.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Life chek blood glucose glucometer test suger machine </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs:3,176</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:3,493</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Finger-Oximeter"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss2.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Finger Oximeter Digital Fingertip Pulse Oximeter Blood Oxygen Saturation Meter </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs: 949</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 2232</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "75CM-Laser"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss3.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>75CM Laser Sword Lightsaber Red and Blue Double Saber Rave Transformation </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl "> Rs: 759</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 3052</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "REDMI-A3"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss4.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>REDMI A3 || 4GB Ram 128GB Rom || 5000mAh Battery </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">Rs: 23,299</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 26,000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Electric-Drinking"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss5.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>1 Electric Drinking Qater Pump Small Automatic Drainage Machine Summer </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">Rs:681</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 2092</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "KARDINAL"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss6.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>KARDINAL High-Quality 3-in-1 Electric Juicer Blender, Grinder </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">Rs:2600</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs: 3000</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Haier"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss7.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Haier -08kg/ Twin Tub / Semi Automatic/ HWM 80-AS Gear System </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">Rs:29499</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:42,700</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else if(params.id == "Haier-HMN"){
        return(
            <>
            <div className=" mt-2 flex h-[38rem]">
               
            <div className='img [@media(max-width:450px)]:mt-28'>
             <Image
                src="/picture/ssss8.webp" 
                alt="Apple mobile"
                width={400}
                height={200} className='ml-1 mt-5 rounded-2xl '/>
            </div>

            <div className=' ml-24'>
                    <h2 className='mt-28 text-3xl [@media(max-width:450px)]:text-xl'>Haier HMN-20MXP6 Microwave Oven 20L </h2>
                    <h3 className="border-2 border-white mb-2 rounded-xl text-orange-500 mt-8 text-3xl [@media(max-width:450px)]:text-xl ">Rs:16399</h3>
                    <h3 className="border-2 border-white rounded-xl text-orange-500    text-3xl [@media(max-width:450px)]:text-xl"><s>Rs:39999</s></h3>  
                    <h2 className='mt-7 text-3xl [@media(max-width:450px)]:text-xl'>sorry this product is not of stock</h2>
            </div>

            </div>
            </>
        )
    }else{
         return(
        <>
            <h1 className='h-[45rem] ml-[30rem] mt-72 text-4xl [@media(max-width:450px)]:ml-10 [@media(max-width:450px)]:mt-60'>not found this {params.id}  </h1>
        </> 
        )
    }



}

export default ProductManage