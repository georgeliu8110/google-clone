'use client'

import { useState } from 'react'
import { MdClear } from "react-icons/md";

export default function SearchBox() {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //send the input to google api
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className=''>
          <input onChange={(e)=>{setInput(e.target.value)}} className=''>
          </input>
          {/* <MdClear /> */}
        </form>
      </div>
  )
}
