import Link from 'next/link'
import WebSearchResults from '../../components/webSearchResults'

export default async function WebSearchPage({searchParams}) {
  const term = await searchParams.searchTerm

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_KEY}&q=${term}`);

  const data = await response.json()
  console.log('data',data)
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
      {results && <WebSearchResults results={data}/>}
    </div>
  )
}