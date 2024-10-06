"use client"

import { useState } from "react";

export default function Cards() {

    const [cardLocked, setCardLocked] = useState(true)

    const handleCard = () => setCardLocked (false)

    return(
        <div className="h-96 w-44 bg-amber-600">
            aaaaaaaaaaaaaa
        </div>
    )
    
}