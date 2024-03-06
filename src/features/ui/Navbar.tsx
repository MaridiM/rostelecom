import { ReactNode } from 'react'
import { paths } from '@/shared'
import { NavbarItem, NavbarSearch } from '@/shared/ui'

import { FavoritesIcon, ComparisonIcon, CartIcon, ProfileIcon }  from '@public/img'



interface NavbarData {
    href: string
    icon: ReactNode
}

const navbarData: NavbarData[] = [
    { href: paths.favorites, icon: <FavoritesIcon className="fill-current" /> },
    { href: paths.comparison, icon: <ComparisonIcon className="fill-current" /> },
    { href: paths.cart, icon: <CartIcon className="fill-current" /> },
    { href: paths.profile, icon: <ProfileIcon className="fill-current" /> },
]

const Navbar = () => {
    return (
        <ul className="flex gap-8">
            <li><NavbarSearch /></li>

            {
                navbarData.map(({ href, icon }, idx) => {
                    return <NavbarItem key={idx} href={href} icon={icon} />
                })
            }
        </ul>
    )
}

export default Navbar
