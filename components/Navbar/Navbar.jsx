"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from './navbar.module.css'
import Lateral from '@/components/Lateral/Lateral'

const links = [
    {
        label: 'INICIO',
        route: ''
    },
    {
        label: 'PRODUCTOS',
        route: '/productos'
    },
]

export default function Navbar() {

    const [barraActivada, setBarraActivada] = useState(false);



    return(
        <>
            <div className={styles.div}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <ul className={styles.ul}>
                    {links.map((link) => (
                        <li key={link.route} className={styles.links}>
                            <Link href={link.route} className={styles.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.botones}>
                    <a onClick={() => {
                        setBarraActivada(!barraActivada)
                        console.log(barraActivada)
                    }} className={styles.boton}>{!barraActivada ? '≣' : '✖                    '}</a>
                </div>
            </div>
            <Lateral barra={barraActivada}></Lateral>
        </>
    )
}