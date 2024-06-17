import React from 'react'
import { twMerge } from 'tailwind-merge'
import {clsx} from "clsx"
const CN
 = (...classes) => {
    return twMerge(clsx(classes))
    
    
}

export default CN
