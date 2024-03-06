import { BurgerIcon } from '@public/img'
import { FC } from 'react'

interface BurderMenuProps {
    text: string
}

const BurderMenu: FC<BurderMenuProps> = ({ text }) => {
    return (
        <button className="flex justify-center items-center gap-3 hover:text-light-hover hover:transition-all duration-300 cursor-default" type="button">
            <BurgerIcon className="h-6 w-6 flex justify-center fill-current"/>
            <span className="text-2xl pt-[2px]">{text}</span>
        </button>
    )
}

export default BurderMenu
