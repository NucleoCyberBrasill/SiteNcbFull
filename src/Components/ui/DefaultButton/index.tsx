import type React from "react"

type DefaultButtonProps = {
    icon?: React.ReactNode,
    children?: string,
    link?: string,
    wfull?: boolean
    fill?: boolean
    border?: boolean
    target?:string
}

export function DefaultButton({ icon, children, link, wfull = false, fill = false, border=false, target }: DefaultButtonProps) {
    return (
        <a
            href={link}
            target={target}
            rel="noopener noreferrer">
            <button className={`cursor-pointer gap-2 p-2 mt-4 inline-flex items-center justify-center
             text-white mx-auto md:mx-0 transition-colors duration-200 rounded ${fill?"bg-[var(--color-secondary-self)] hover:bg-[var(--color-secondary-hover-self)] ":""} ${border?"border ":""} ${wfull ? "w-full" : ""}`}>
                {children}
                <span>{icon}</span>
            </button>
        </a>
    )
}