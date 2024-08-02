import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null);

  const data = [
  // desc filesize closeOrDowload tagdetails
    {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize : ".9mb",
      close : false,
      tagdetails : {isOpen: true, tagTitle : "Download now", tagColor : "green"}, 
    },
    {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize : ".9mb",
      close : false,
      tagdetails : {isOpen: true, tagTitle : "Download now", tagColor : "blue"}, 
    },
    {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize : ".4mb",
      close : false,
      tagdetails : {isOpen: false, tagTitle : "Upload", tagColor : "green"}, 
    },
    {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize : ".9mb",
      close : false,
      tagdetails : {isOpen: true, tagTitle : "Upload", tagColor : "green"}, 
    },
    {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize : ".7mb",
      close : false,
      tagdetails : {isOpen: false, tagTitle : "Download now", tagColor : "blue"}, 
    },
  ]
 
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item,index)=>(
      <Card data={item} reference={ref}/>
    ))}
    </div>
  )
}

export default Foreground
