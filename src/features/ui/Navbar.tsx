import { paths } from '@/shared'
import { FavoritesIcon } from '@/shared/assets'
// import FavoritesIcon from '@public/img/favorites.svg';
import { NavbarItem, NavbarSearch } from '@/shared/ui'

// import { IconSVG } from '@/types'
// import FavoritesIcon  from '@public/img/favorites.svg'
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
            {/* <li>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.97831C0 2.24655 2.16494 0 4.87453 0C6.28971 0 7.51681 0.748552 8.36755 1.76904C8.60454 2.0533 8.8168 2.36357 8.99972 2.69262C9.18247 2.36365 9.39455 2.05344 9.63135 1.76922C10.4816 0.748632 11.7083 0 13.1236 0C15.8332 0 17.9981 2.24655 17.9981 4.97831C17.9981 7.40061 16.4893 9.54846 14.7652 11.3159C13.4435 12.6709 11.8908 13.902 10.5947 14.9297C10.1917 15.2493 9.81343 15.5491 9.47466 15.827C9.19814 16.0538 8.79997 16.0538 8.52345 15.827C8.18468 15.5491 7.80644 15.2493 7.40339 14.9297C6.10728 13.902 4.55461 12.6709 3.23286 11.3159C1.50876 9.54846 0 7.40061 0 4.97831ZM9.75 5.5H8.25C8.25 4.52096 7.85832 3.50072 7.21541 2.72954C6.5729 1.95883 5.73726 1.5 4.87453 1.5C3.02829 1.5 1.5 3.03961 1.5 4.97831C1.5 6.78433 2.64272 8.56277 4.30662 10.2685C5.5544 11.5477 6.99519 12.6905 8.27916 13.7089C8.52573 13.9044 8.76652 14.0954 8.99905 14.2819C9.23158 14.0954 9.47237 13.9044 9.71894 13.7089C11.0029 12.6905 12.4437 11.5477 13.6915 10.2685C15.3554 8.56277 16.4981 6.78433 16.4981 4.97831C16.4981 3.03961 14.9698 1.5 13.1236 1.5C12.2609 1.5 11.4258 1.95875 10.7838 2.72936C10.1414 3.50047 9.75 4.52075 9.75 5.5Z" fill="#E8E9EA"/>
                </svg>
            </li> */}
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
