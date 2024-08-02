import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
import { RiEyeFill } from 'react-icons/ri';


function Card({data,reference}) {
  return (
   
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic = {0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
     <div className='footer absolute bottom-0 w-full left-0  '>
     <div className='flex item-center justify-between mb-1 py-3 px-8'>
        <h5>{data.filesize}</h5>
        <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
        {data.close ? <IoIosClose /> : <MdOutlineFileDownload size="1em" color='#fff' />}
        
        </span>
    </div>

{data.tagdetails.isOpen && (<div className={`tag w-full py-4 ${data.tagdetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
    <h3 className='text-sm font-semibold '>{data.tagdetails.tagTitle}</h3>
</div>) }



    </div>
    </motion.div>

    
  )
}

export default Card
