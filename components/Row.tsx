import { HiChevronDoubleRight, HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import {Movie} from '../typing'

interface Props{
  title: string
  movies: Movie[]
}

function Row({title, movies}:Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2>{title}</h2>
      <div className='group relative md:-ml-2'>
        <HiOutlineChevronDoubleLeft
        className='absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer
        opacity-0 transition hover:scale-125 group-hover:opacity-100'/>
        <HiChevronDoubleRight
        className='absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer
        opacity-0 transition hover:scale-125 group-hover:opacity-100'/>
      </div>
    </div>
  )
}

export default Row