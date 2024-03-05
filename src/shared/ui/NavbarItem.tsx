import { IconSVG } from "@/types"
import Image from "next/image"
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
            className="h-6 w-6 flex justify-center items-center fill-blue-500 bg"
        >
            {icon}
            {/* <Image
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt="Rostelecom Store"
            /> */}
        </Link>
    )
}

export default NavbarItem
