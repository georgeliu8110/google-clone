'use client'

import {usePathname, useSearchParams} from 'next/navigation'
import Link from 'next/link'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function PaginationButtons() {

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const term = searchParams.get('searchTerm')
  const startIndex = Number(searchParams.get('start'))

  return (
    <div className='flex text-blue-700 px-10 pb-4 justify-between sm:justify-start sm:space-x-44'>
      <Link href={`${pathname}?searchTerm=${term}&start=${startIndex - 10}`}>
        { startIndex >= 10 && (
          <div className='flex flex-col items-center hover:underline'>
            <MdArrowBackIos></MdArrowBackIos>
            <p>Previous</p>
          </div>
        )}
      </Link>
      <Link href={`${pathname}?searchTerm=${term}&start=${startIndex + 10}`}>
        { startIndex <= 100 && (
          <div className='flex flex-col items-center hover:underline'>
            <MdArrowForwardIos></MdArrowForwardIos>
            <p>Next</p>
          </div>
        )}
      </Link>
    </div>
  )
}