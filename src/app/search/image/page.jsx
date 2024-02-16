import Link from 'next/link'
import ImageSearchResults from '../../components/ImageSearchResults'

export default async function ImageSearchPage({searchParams}) {
  const startIndex = searchParams.start || '1'
  const term = await searchParams.searchTerm

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_KEY}&q=${term}&searchType=image&start=${startIndex}`);
  const data = await response.json()
  const results = await data.items

  if (!results) {
    return (
      <div className='justify-center flex flex-col items-center bg-white pt-10'>
        <h1 className='text-3xl pb-2'>No results found for {term}</h1>
        <p className='text-lg pb-2'>Please try searching for something else </p>
        <Link className=' text-blue-500' href={'/'}> Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      {results && <ImageSearchResults results={data}/>}
    </div>
  )
}