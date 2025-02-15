

import { Quote } from "../components/Quote";
import { SignSec } from "../components/SignSec";


const Signin = () => {
    return (
       
         <>
         
         
         <div className=" bg-white dark:bg-gray-700 min-h-screen flex items-center justify-center backdrop-blur-4xl">
             
             <div className="  grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-700 backdrop-blur-xl p-5 border-2 border-black  dark:border-white
             hover:shadow-xl hover:shadow-neutral-50/50 rounded-xl w-[400px] md:w-[800px] max-w-full transform -translate-y-10 ">
                 {/* Left Section - Sign In */}
                 <div className=" col-span-1 p-5  md:border-r-2 border-black dark:border-white overflow-hidden flex items-center justify-center">
                     <SignSec />
                 </div>
                 {/* Right Section - Quote */}  
                 <div className=" hidden md:block col-span-1  overflow-hidden  items-center justify-center text-center">
                     <Quote />
                 </div>
             </div>
         </div> 
        
         
         </>


    );
};

export default Signin;
