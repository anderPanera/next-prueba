"use client"

import { useState } from "react"
import styles from './lateral.module.css'

export default function Navbar({ barra }) {

    return(
        <div className={`${styles.div} ${barra ? styles.barra : styles.sinbarra}`}>
            <h2>Barra lateral</h2>
        </div>
    )
}