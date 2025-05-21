'use client'
import { memo } from "react"

console.log('-------------------- Re-Render Test');
const Test = () => {
    return (
        <div>dsds</div>
    )
}

export default memo(Test)