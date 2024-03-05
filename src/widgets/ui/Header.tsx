'use client'
import { Navbar } from "@/features"

import { useLanguage } from "@/shared/libs"
import { BurgerMenu, Logo } from "@/shared/ui"


const Header = () => {
    const { lang, translations } = useLanguage()
    return (
        <header className="h-20 w-full flex items-center">
            <div className="container flex justify-between items-center">
                <BurgerMenu text={translations[lang].header.menu_btn} />
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}

export default Header