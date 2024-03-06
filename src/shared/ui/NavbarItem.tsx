import Link from "next/link"
import { FC, ReactNode } from "react"

interface NavbarItemProps {
    href: string
    icon: ReactNode
}


const NavbarItem: FC<NavbarItemProps> = ({ href, icon }) => {
    return (
        <Link
            href={href}
            className="h-6 w-6 flex justify-center items-center hover:text-light-hover hover:transition-all duration-300 cursor-default"
        >
            { icon }
        </Link>
    )
}

export default NavbarItem
