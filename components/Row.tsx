import { HiChevronDoubleRight, HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import {Movie} from '../typing'
import {useRef, useState} from 'react'
import  Caroussel  from "../components/Caroussel";
interface Props{
  title: string
    //When using firebase
    // movie:Movie | DocumentData
  movies: Movie[]
}

function Row({title, movies}:Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [Moved, setMoved] = useState(false)

  const scroll = (direction: string) => {
     setMoved(true)
     if(rowRef.current){
      const {scrollLeft, clientWidth} = rowRef.current
      
      const scrollTo = 
        direction === 'left'
         ? scrollLeft - clientWidth
         : scrollLeft + clientWidth 

        rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
     }
  }

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold uppercase text-[#d1d0d0] transition duration-200 hover:text-white
      md:text-xl'>{title}</h2>
      <div className='group relative md:-ml-2'>
        <HiOutlineChevronDoubleLeft
        className={`absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer
        opacity-0 transition hover:scale-125 group-hover:opacity-100
        ${!Moved && 'hidden'}`} 
        onClick={() => scroll("left")}/>
        
        <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2 md:p-2'>
          {movies.map((movie) => (
            <Caroussel key={movie.id} movie={movie}/>

          ))}
        </div>
        
        <HiChevronDoubleRight
        className={`absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer
        opacity-0 transition hover:scale-125 group-hover:opacity-100`} 
        onClick={() => scroll("right")}/>
      </div>
    </div>
  )
}

export default Row