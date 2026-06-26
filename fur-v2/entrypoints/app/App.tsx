import { atom, useAtom } from "jotai";
import { motion } from "motion/react";
import React from "react";
import { createPortal } from "react-dom";
import { type ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const openAtom=atom<boolean>(false);
export const App=({}):ReactElement=>{
  const[open,setOpen]=useAtom(openAtom);
  return(<>
    <motion.button className="button" onClick={(e)=>{
      e.preventDefault();
      setOpen(!open)
    }}>
      <FontAwesomeIcon icon={faBars}/>
    </motion.button>
  </>);
}