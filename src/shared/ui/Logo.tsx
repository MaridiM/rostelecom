import Link from 'next/link'
import React from 'react'
import { paths } from '..'

const Logo = () => {
    return (
        <Link href={paths.home}>
            <img 
                className='w-auto max-h-[50px]'
                src="/img/logo.svg"
                alt="Rostelecom Store"
            />
        </Link> 
    )
}

export default Logo
