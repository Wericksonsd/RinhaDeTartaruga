"use client"

import Image from 'next/image'
import { useState } from "react";

export default function Cards() {

    const [cardLocked, setCardLocked] = useState(true)

    const handleCard = () => setCardLocked (false)

    return(
        <div className="h-[550px] w-[280px] p-4 bg-contornoClr bg-cover">
            <div className='h-full w-full pt-5 rounded-lg bg-slate-100 shadow-interna shadow-zinc-900 bg-pantanalBG bg-cover bg-center flex flex-col items-center justify-top'>
                <span className='text-3xl font-["Lilita One"]'>PANTANAL</span>
            </div>
        </div>
    )
    
}