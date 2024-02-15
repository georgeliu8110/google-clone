import Link from 'next/link'
import Image from 'next/image'
import SearchBox from './SearchBox'
import { RiSettings3Line } from "react-icons/ri"
import { PiDotsNine } from "react-icons/pi";
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {

  return (
    <header className='sticky top-0 bg-white '>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href='/'>
          <Image src='/google_logo.jpeg' alt="google logo" width={100} height={50} className=''/>
        </Link>
        <div className='flex-1'>
          <SearchBox ></SearchBox>
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'></RiSettings3Line>
          <PiDotsNine className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'></PiDotsNine>
        </div>
        <button className='bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow ml-2'>Sign In</button>
      </div>
      <SearchHeaderOptions></SearchHeaderOptions>
    </header>
  )
}