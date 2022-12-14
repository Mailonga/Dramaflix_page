import { useEffect, useState } from "react"
import { Movie } from "../typing"
import {baseUrl} from '../constants/movie'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../Atoms/modalAtom";

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)


    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])
    console.log(movie)
    return (
        <div className="flex flex-col space-y-2 py-28 md:space-y-4 lg:h-[65vh] lg:justify-between lg:pb-10">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                layout="fill"
                objectFit="cover"
                />
            </div>

            <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl sm:px-4">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-md lg:max-w-md lg:ml-4 lg:text-sm">{movie?.overview}</p>

            <div className="flex space-x-3">
                <button className="btnBanner bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-6 md:w-6 "/>Play</button>
                <button className="btnBanner bg-[gray]/70"
                onClick={() => {
                    setCurrentMovie(movie)
                    setShowModal(true)
                }}><HiOutlineInformationCircle className="h-4 w-4 md:h-7 md:w-7"/>Info</button>
            </div>
        </div>
    )
}

export default Banner