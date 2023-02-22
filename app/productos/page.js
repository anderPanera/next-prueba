"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import styles from './productos.module.css'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

export default function App() {

  const [productos, setProductos] = useState({products: []})

  useEffect(() => {

    async function fetchData() {
      const data = await fetch('https://dummyjson.com/products')
      const res = await data.json()

      setProductos(res)
    }
    
    if (productos.products.length === 0) {
      fetchData()
    }
  }, [productos.products.length])

  return(
    
    <motion.div
      className={styles.div}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1 className={styles.title}>PRODUCTOS</h1>
      {productos.products.map((p, index) => (
        <motion.div key={index} className={styles.item} variants={item}>
            <img className={styles.img} src={p.thumbnail} alt={p.title} ></img>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span><Link href={`/productos/${p.id}`}>Ver mas ⟶</Link></span>
        </motion.div>
      ))}
    </motion.div>
  )
}