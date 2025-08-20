"use client"

import { useState, useEffect, Dispatch } from 'react'
import { motion, vw } from 'motion/react'
import { delay } from 'motion'

const animation = {
  style: {
    width: "90vw",
    height: "10vh",
    marginTop: "2vh"
  }
  
}

export default function NavBar({ collapsedByDefault = false }: { collapsedByDefault?: boolean }) {
    const [isCollapsed, setCollapsed] = useState(collapsedByDefault)

    return (
     <div className="navBarContainer">
        <motion.div className={`navBar`} transition={{ type: "spring" }} animate={{ width: "90vw", height: "5vh"}}>
          {/* <h1>Dignitas</h1>
          <span className="materialIcons">menu</span> */}
     </motion.div>
     </div>
    )
}

export function EnlargeMenu(setCollapsed: Dispatch<React.SetStateAction<boolean>>) {
  setCollapsed(false)
  delay(() => setCollapsed(true), 5);

}