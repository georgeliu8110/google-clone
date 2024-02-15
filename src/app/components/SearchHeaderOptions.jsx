'use client'

import {useRouter, useSearchParams, usePathname} from 'next/navigation'
import { AiOutlineSearch } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";

export default function SearchHeaderOptions() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const term = searchParams.get('searchTerm')
  const pathname = usePathname()

  const selectTab = (tab) => {
    router.push(`/search/${tab === 'Image' ? 'image' : 'web'}?searchTerm=${term}`)
  }

  return (
    <div className='flex space-x-2 select-none border-b items-center justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div onClick={()=>{selectTab('All')}} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 !border-blue-600' }`}>
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div onClick={()=>{selectTab('Image')}} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-blue-600 !border-blue-600' }`}>
        <CiCamera />
        <p>Images</p>
      </div>
    </div>
  )
}