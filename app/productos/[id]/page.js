"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styles from './producto.module.css'
import Producto from '@/components/Producto/Producto'
import Link from "next/link"

export default function App({ params }) {

  const { id } = params

  const [producto, setProducto] = useState(
    {"id":0,"title":"","description":"","price":0,"discountPercentage":0,"rating":0,"stock":0,"brand":"","category":"","thumbnail":"","images":[]}
  )

  useEffect(() => {

    async function fetchData() {
    
      const data = await fetch(`https://dummyjson.com/products/${id}`)
      const res = await data.json()

      console.log(res.images)

      setProducto(res)
    }
    
    fetchData()
    
  }, [id])

  return(
    <motion.div
        className={styles.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
    >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            <h1>{producto.title}</h1>
            <span><Link href={`/productos`}>⟵ Atras</Link></span>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
        >
            <p>{producto.description}</p>
            
        </motion.div>
        <motion.div className={styles.swiper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
        >
            <h3>⟵ Galeria ⟶</h3>
            <Producto imgs={producto.images}></Producto>
        </motion.div>
    </motion.div>
  )
}