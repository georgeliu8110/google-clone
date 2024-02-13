'use client'

import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaMicrophone } from "react-icons/fa"
import {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function HomeSearch() {

  const [input, setInput] = useState('')
  const [ randomSearchLoading, setRandomSearchLoading ] = useState(false)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }
  const randomSearch = async (e) => {
    setRandomSearchLoading(true)
    e.preventDefault()
    const res = await fetch(`https://random-word-api.herokuapp.com/word`)
    const data = await res.json()
    router.push(`/search/web?searchTerm=${data[0]}`)
    setRandomSearchLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <FaMagnifyingGlass className='text-xl text-gray-500 mr-3'></FaMagnifyingGlass>
         <input onChange={(e)=>setInput(e.target.value)} type='text' className='flex-grow focus:outline-none'/>
         <FaMicrophone className='text-xl'></FaMicrophone>
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
        <button onClick={handleSubmit} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-800 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>
          Google Search
        </button>
        <button disabled={randomSearchLoading} onClick={randomSearch} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-800 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm '>
          {randomSearchLoading? 'loading...' : 'I am Feeling Lucky'}
        </button>
      </div>

    </>
  )
}