import SearchHeader from '../components/SearchHeader'

export default function layout({children}) {
  return (
    <div className='bg-[#f2f2f2]'>
      <SearchHeader></SearchHeader>
      {children}
    </div>
  )
}