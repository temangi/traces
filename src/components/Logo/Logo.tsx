import React from 'react'
import scss from './Logo.module.scss'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
        <div className={scss.logo}>
            <Link href={"/"} className={scss.logo__title}>Kyrgyz Traces</Link>
        </div>
    </>
  )
}

export default Logo