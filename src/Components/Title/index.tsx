import type React from "react"

type TitleProps = {
    children: React.ReactNode,
    subtitle?: React.ReactNode | null,
    center?: boolean
}
export function Title({children, center, subtitle}:TitleProps) {
    return(
        <>
         <h1 className={`text-3xl mt-2 ${center?"text-center":""}`}>{children}</h1>
       {subtitle && (
         <h2 className={`text-xl ${center?"text-center":""}`}>
          {subtitle}
        </h2>
       )}
        </>
    )
}