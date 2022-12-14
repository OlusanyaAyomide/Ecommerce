import React,{useEffect, useState} from 'react'
import {logo,camera,station} from '../../assests/index.js'
import { Cart,Slider } from '../components.jsx'
import {categories,Searchresults,SlideImage} from '../../constants/index.js'
import {motion} from 'framer-motion'
import { NavbarAn } from '../xanimation.jsx'


export function Header(){
  const[toggle,setToggle] = useState(false)
  const[drop,setdrop] = useState(false)
  const [admin,setadmin] = useState(false)
  const[Searchresult,setSearchResult] = useState(Searchresults)
  const [CategoryList,setCategoryList] = useState(categories)
  const [isearching,setisSearching] = useState()
  const [curImage,setCurImage] = useState(SlideImage)
  const [count,setcount] = useState(0)

  // console.log(curImage.SlideImage[0].url)

  const CategoryItems = CategoryList.map((items,key)=>{
    return(
      <li className='py-1 hover:before:bg-black/20  dark-cover relative before:animate-all rounded-sm overflow-hidden before:duration-300 text-gray-900' key ={key }><a href={`#${items.id}`}>{items.name}</a></li>
    )
  })
  const SearchList  = Searchresult.map((item,key)=>{
    return(
      <li key={key} className="text-[14px] text-gray-500">
        <a href={`#${item.id}`}>{item.name}</a>
      </li>
    )
  })


  function Blurout(){
    setisSearching(false)
  }
  function dropdown(){
    setdrop((prev=>!prev))
    setadmin(false)
  }
  function changToggle(){
    setToggle((prev=>!prev))
  
  }
  function ChangeAdmin(){
    setadmin((prev=>!prev))
    setdrop(false)
  }
  function SearchDiv(e){
    setisSearching(true)
    setToggle(false)
    console.log(e.target.value)
  }
  function User(props){
    const check = ()=>{if (props.type === 'user'){return drop}return admin}
    const click=()=>{if (props.type === 'user'){return dropdown}return ChangeAdmin}
    return (
      <div className='font-semibold text-[14px]'>{props.name}
           <i className={`${!check()?'fa fa-angle-down':'fa fa-angle-up'} ml-1`} onClick={click()}></i>
           {check() && <ul className={`${props.status?"":"absolute"} top-10 font-normal  py-1 bg-gray-100 rounded-md`}>
              {props.items.map((item,key)=>{
                return(
                  <li key={key} className="px-6 py-1 hover:before:bg-black/20  dark-cover relative before:animate-all rounded-md overflow-hidden before:duration-300"><a href="#"></a>{item}</li>
                )
              })}
           </ul>}
          </div>
    )
  }
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(count<4){
  //       setcount((prev=>prev + 1))
  //     }
  //     else(setcount(0))
  //   },5000
  // )
  // },[count])

  return(
    <section className='container'>
      <div className='row justify-between md:justify-start'>
        <div className='flex items-center h-[60px] md:h-[60px] w-5/12 md:w-4/12' >
          <div className='flex items-center -ml-2'>
            {!toggle && <button><span className='inline-block fa fa-bars text-3xl md:hidden' onClick={changToggle}></span></button>}
            {toggle && <button><span className='inline-block fa fa-close text-3xl md:hidden' onClick={changToggle}></span></button>}
            <div className='h-[50px] w-[120px]  md:w-[150px] md:h-[70px] -ml-3'>
              <img src={logo} alt="" className="cover"/>
            </div>
          </div> 
        </div>

        <div className="w-7/12 md:w-5/12 flex items-center ">
            <input type="text" placeholder='Search' className='input' onKeyDown={SearchDiv} onBlur={Blurout}/>
            <button className='px-2 py-1 rounded-tr-md rounded-br-md bg-[#5858ec]'><i className='fa fa-search text-white text-2xl'></i></button>
            <span className='md:hidden'><Cart name = {0}/></span>
        </div> 
        <div className='md:w-3/12 hidden md:flex relative items-center justify-between px-1'>
          <span><User name="Ayomide" items={["profile","Orders","saved Items"]} type="user"/></span>
          <span><User name="Admin" items ={["Products","View"]} type="admin"/></span>
          <span><Cart name={0}/></span>  
        </div>
    
      </div>
      {toggle &&<motion.div className="fixed w-full bg-black/10 h-full  top-15 left-0 z-50 md:hidden" variants={NavbarAn} initial="initial" animate="animate">
          <div className='w-10/12 h-full bg-[#FAF9F6] py-4  px-4 md:px-6'>
            <h1 className='style-heading'>My Magneto Account</h1>
            <span className='block mb-3'><User name="Ayomide" items={["profile","Orders","Saved Items"]} type="user" status="nav"/></span>
            <span className='block mb-3'><User name="Admin" items ={["Products","View"]} type="admin" status="nav"/></span>
            <h1 className='style-heading'>Categories</h1>
            <ul>
              {CategoryItems}
            </ul>
          </div>
      </motion.div>}
      {isearching && <div className='absolute w-full bg-gray-100 z-50 -ml-4 px-4'>
            <ul className=''>
              {SearchList}
            </ul>
        </div>}

        
        <div className='row bg-gradient-to-b from-[#5858ec]/10 to-transparent pb-5 -mx-4 md:-mx-6 px-4 md:px-6'>
          <div className='hidden md:w-3/12 md:block'>
            <div>
              <ul>
                {CategoryItems}
              </ul>
            </div>
          </div>
          <div className='w-full md:w-9/12'>
            <div className='flex justify-center py-4 mb-2'>
            <h1 className='py-1 px-3 bg-[#5858ec] relative header-design text-white z-20 rounded-md'>
               Featured Products</h1>
            </div>
            <div className=' w-full px-6 md:px-10 lg:px-16 rounded-xl'>
              <Slider url={curImage[count].url} label={curImage[count].label}/>
            </div>
          </div>
        </div>
    </section>
  )
}

