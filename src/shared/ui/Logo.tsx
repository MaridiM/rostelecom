import Link from 'next/link'
import React from 'react'
import { paths } from '..'
import { LogoIcon } from '@public/img'

const Logo = () => {
    return (
        <Link href={paths.home} className='w-full h-[50px]'>
            <LogoIcon  className="w-full h-full" />
        </Link> 
    )
}

export default Logo
