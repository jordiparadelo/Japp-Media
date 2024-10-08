import { cn } from "@/libs/utils";

import React from 'react'

type Props = {
    children: React.ReactNode,
    rotation?: number,
    color?: string,
    className?: string
}

function SectionTag({ children = 'Tag', rotation, color = '--color-primary' , className}: Props) {
    const cornerClass = "after:content-[''] after:h-[40%] after:aspect-square after:absolute  after:rounded-sm after:bg-white after:top-0 after:right-[0] after:left-auto";
    return (
      <div style={{clipPath: 'polygon(90% 0px, 100% 40%, 100% 100%, 0px 100%, 0px 0px)', transform: `rotateZ(${rotation}deg)`, backgroundColor: color,
      }} className={cn(`relative flex place-items-center corner rounded-md px-5 py-2 text-slate-800 max-w-[fit-content]  ${cornerClass} ${className})`)}>
        {children}
      </div>
    )
}

export default SectionTag