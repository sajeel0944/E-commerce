import { AiOutlineLoading3Quarters } from "react-icons/ai"

function Not(){
     return (
        <>
            <h1 className="text-white text-center  mt-64 text-4xl"> 404 | Work is in progress on this page.</h1>
            <i className="text-white text-9xl text-center absolute left-[38rem] mt-10 animate-spin [@media(max-width:450px)]:left-[8rem]"><AiOutlineLoading3Quarters /></i>
        </>
     )
}
export default Not