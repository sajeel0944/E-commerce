import Image from "next/image"

const Home=()=>{
    // ya ho
    return(
        <>
             <div className="div-main-1 -mb-20 flex [@media(max-width:450px)]:flex-none">

                <div className="div-1 border-2 border-black w-1/2 h-2/3 bg-black text-white text-8xl pt-10 [@media(max-width:450px)]:h-[23.5rem] [@media(max-width:450px)]:1/2">
                   <h1 className="mb-10 font-serif italic [@media(max-width:450px)]:text-4xl">
                       Wellcome To SUK Electronic Store In Pakistan
                  </h1>
                </div>

                <div className="div-2  border-2 border-black  text-8xl [@media(max-width:450px)]:text-5xl">
                    <Image src={"/picture/bgim1.jpg"} alt={""} width={400} height={400} className="  h-full w-[41.9rem]"></Image>
                </div>
            </div>
            <hr />
            
        </>
    )
}

export default Home
