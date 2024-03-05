import { paths } from '@/shared'
import { FavoritesIcon } from '@/shared/assets'
import { NavbarItem, NavbarSearch } from '@/shared/ui'

// import { IconSVG } from '@/types'
// import FavoritesIcon  from '@public/img/favorites.svg'
import Image from 'next/image'
// import ComparisonIcon from '@public/img/comparison.svg'
// import CartIcon from '@public/img/cart.svg'
// import ProfileIcon from '@public/img/profile.svg'



// interface NavbarData {
//     href: string
//     icon: IconSVG
// }

// const navbarData: NavbarData[] = [
//     { href: paths.favorites, icon: FavoritesIcon },
//     { href: paths.comparison, icon: ComparisonIcon },
//     { href: paths.cart, icon: CartIcon },
//     { href: paths.profile, icon: ProfileIcon },
// ]

const Navbar = () => {
    return (
        <ul className="flex gap-8">
            <li><NavbarSearch /></li>
            <li><FavoritesIcon /></li>

            {/* {
                navbarData.map(({ href, icon: Icon }, idx) => {
                    return <FavoritesIcon />
                    // return <NavbarItem key={idx} href={href} icon={<FavoritesIcon />} />
                })
            } */}
        </ul>
    )
}

export default Navbar
