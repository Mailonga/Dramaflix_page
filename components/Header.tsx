import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header(){
    const [Scroll, setScroll] = useState(false)

    useEffect(() => {
       const hScroll = () =>{
        if (window.scrollY > 0){
            setScroll(true)
        }else{
            setScroll(false)
        }
       } 
       window.addEventListener("scroll", hScroll)

       return () => {
        window.removeEventListener("scroll", hScroll)
       }
    }, [])
  return (
    <header className={`${Scroll && 'bg-[#242424]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <h1 className="text-red-700 font-bold uppercase px-2 cursor-pointer object-contain md:text-2xl">Dramaflix</h1>

            <ul className="hidden space-x-4 md:flex">
                <li className="list">Home</li>
                <li className="list">Dramas</li>
                <li className="list">Filmes</li>
                <li className="list">Novos & Populares</li>
                <li className="list">Minha Lista</li>
            </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
           <HiOutlineSearch className="cursor-pointer hover:text-slate-100/90 hidden w-4 h-4 sm:inline md:w-6 md:h-6 md:hover:text-slate-100/70"/>  
           <p className="cursor-pointer hidden hover:text-slate-100/90 lg:inline md:text-lg">Infantis</p>
           <HiOutlineBell className="cursor-pointer hover:text-slate-100/90 w-4 h-4 md:w-6 md:h-6 md:hover:text-slate-100/70"/>
           <Link href="/conta">
              <img src="https://rb.gy/g1pwyx" alt=""
              className="cursor-pointer rounded h-5 w-5 md:w-6 md:h-6" />
           </Link>  
        </div>
    </header>
  )
}
