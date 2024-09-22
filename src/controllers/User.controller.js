import mongoose from "mongoose";



const hello = async()=>{
    try {
     const hello = " my name is Akash "

        return{hello}


    } catch (error){

        throw new ApiError(500,"Something went wrong while generating referesh and access token")
    }
}

export {
    hello

}














