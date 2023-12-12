import React from 'react'
import style from './Footer.module.css'
export default function Footer({children}) {
  return (
    <div className={style.footer}>
      {children}
    </div>
  )
}
