import { FC } from 'react'

interface BurderMenuProps {
    text: string
}

const BurderMenu: FC<BurderMenuProps> = ({ text }) => {
    return (
        <button className="flex justify-center items-center gap-3" type="button">
            <span className="h-6 w-6 flex justify-center">
                <img src="/img/burger.svg" alt="Rostelecom Store" />
            </span>
            <span className="text-2xl pt-[3px]">{text}</span>
        </button>
    )
}

export default BurderMenu
