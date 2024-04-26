import axios from 'axios';
import React from 'react'
import { IoClose } from "react-icons/io5";

const MessageCard = ({ name, email, company, message, id, fetchMessage }) => {

    const deleteMessage = async () => {
        try{
            if(confirm("Sure?")){
                const data = await axios.delete("/api/message", {data:{id}})
                if(data?.status === 200){
                    fetchMessage();
                }
            };
        }catch(e){
            console.log("Error Deleting Message", e);
        }
    }

    return (
        <div className='bg-gradient-to-tr from-gray-100 to-gray-300 hover:from-gray-300 hover:to-gray-100 px-3 md:px-6 pt-2 pb-6 flex flex-col gap-x-4 hover:scale-105 duration-150 font-basic w-full shadow-lg rounded-md'>
            <div className='cursor-pointer ml-auto' onClick={deleteMessage}><IoClose className=" hover:opacity-85 w-6 h-6 sm:w-7 sm:h-7 opacity-75 hover:cursor-pointer text-gray-500" /></div>
            <div className=' flex gap-x-1 md:gap-x-3 text-xs sm:text-sm md:text-base'>
                <div className=' flex flex-col gap-y-3 font-bold text-gray-500 capitalize'>
                    <div>name:</div>
                    <div>email:</div>
                    <div>company:</div>
                    <div>message:</div>
                </div>
                <div className=' flex flex-col gap-y-3 text-detail'>
                    <div>{name}</div>
                    <div>{email}</div>
                    <div>{company}</div>
                    <div>{message}</div>
                </div>
            </div>

        </div>
    )
}

export default MessageCard