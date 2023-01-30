import React from 'react'
import { basicComponentStyle } from '../../styles/styles'

const SideBar = () => {
  return (
    <div className={`h-5/6 w-1/5 ${basicComponentStyle} `}>

    <div className='flex flex-col'>
      <h1 className='font-bold text-center  py-2 text-xl'>Catagories</h1>
      <div className='flex flex-col  px-4'>

    <Tile value = {"Sports"}></Tile>
    <Tile value = {"Nature"}></Tile>
    <Tile value = {"Technology"}></Tile>
    <Tile value = {"Gaming"}></Tile>
    <Tile value = {"Event"}></Tile>
      </div>
    </div>

    </div>
  )
}

const Tile = ({value}:{value:string})=>{
  return(
    <div className='text-center bg-slate-100 text-blue-700 font-semibold  py-2 my-2'>
      {value}
    </div>
  )
}

export default SideBar