"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

export default function Productos() {

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
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1>PRODUCTOS</h1>
      {productos.products.map((p, index) => (
        <motion.div key={index} className="item" variants={item}> {p.title}</motion.div>
      ))}
    </motion.div>
  )
}