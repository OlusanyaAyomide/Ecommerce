import React from 'react'
import {motion} from "framer-motion"
import { Featured } from './xanimation'

export function Cart(props) {
  return (
    <span className='inline-block fa fa-shopping-cart relative text-3xl '> 
        <span className='absolute -top-3 md:-top-[10px] text-sm px-1 rounded-full py-0 bg-red-500 text-white left-3  font-semibold'>{props.name>0?props.name:''}</span>
    </span>
  )
}
export function Slider(props){
  return(
    <motion.div className="w-full h-[200px] rounded-xl overflow-hidden relative dark-cover before:bg-black/10  bg-gradient-to-r to-slate-200 from-white" variants={Featured} initial="initial" animate="animate">
      <div>
      <img src={props.url} alt="image" className="cover-image h-[200px]" />
      </div>

      <span className='absolute bottom-4 left-2 text-gray-900 text-[21px] md:text-2xl lg:text-3xl bg-white/70 px-2 rounded-lg font-semibold'>{props.label}</span>
    </motion.div>
  )
}