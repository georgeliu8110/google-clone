'use client'

import { useState, useEffect } from 'react'
import { MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import {useSearchParams} from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [input, setInput] = useState('')
  const searchParams = useSearchParams()
  const term = searchParams.get('searchTerm')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  useEffect(() => {
    setInput(term)
  }, [term])

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow items-center max-w-3xl'>
          <input type='text' onChange={(e)=>{setInput(e.target.value)}} className='w-full focus:outline-none' value={input}>
          </input>
          <MdClear className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>{setInput('')}}/>
          <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4'></BsFillMicFill>
          <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}></AiOutlineSearch>
        </form>
      </div>
  )
}
