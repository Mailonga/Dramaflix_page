import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../Atoms/modalAtom"
import { HiX, HiPlay, HiPlus, HiThumbUp, HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import {Element, Genre} from "../typing"
import ReactPlayer from "react-player/lazy";

function Modal(){
    const [movie, setMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [trailer, setTrailer] = useState('')
    const [genre, setGenre] = useState<Genre[]>([])
    const [muted, setMuted] = useState(true)

    useEffect(() => {
        if(!movie) return

        async function fetchMovie(){
            const data = await fetch(`https://api.themoviedb.org/3/${
                movie?.media_type === 'tv' ? 'tv' : 'movie'
              }/${movie?.id}?api_key=${
                process.env.NEXT_PUBLIC_API_KEY
              }&language=en-US&append_to_response=videos`
              ).then((response) => response.json())
               .catch((err) => console.log(err.message))

              if(data?.videos){
                const index = data.videos.results.findIndex((element: Element) => element.type === "Trailer")
                setTrailer(data.videos?.results[index]?.key)
              }
              if(data?.g){
                setGenre(data.genres)
              }
            }
        fetchMovie()
    }, [movie])

    const handClose = () => {
        setShowModal(false)
    }

    console.log(trailer)

    return <MuiModal open={showModal} onClose={handClose} className="fixed !top-7 left-0
    right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
        <>
           <button onClick={handClose} className="modalButton absolute right-5 top-5 z-40 h-7 w-7
            border-none bg-[#1f1f1f] hover:bg-[#1f1f1f]">
               <HiX className="h-5 w-5"/>
           </button>

           <div className="relative pt-[50.25%]">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailer}`}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: '0', left: '0' }}
                    playing
                    muted={muted}
                />
                <div className="absolute bottom-10 flex w-full items-center px-10">

                    <div className="flex space-x-2">

                        <button className="flex items-center gap-x-2 rounded bg-white px-2 py-1 text-xl font-bold text-black
                        transition hover:bg-[#e6e6e6]">
                            <HiPlay className="h-7 w-7 text-black"/>
                            Play
                        </button>

                        <button className="modalButton">
                            <HiPlus className="h-7 w-7"/>
                        </button>

                        <button className="modalButton">
                            <HiThumbUp className="h-7 w-7"/>
                        </button>

                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <HiVolumeOff className="h-6 w-6"/>
                            ) : (
                                <HiVolumeUp className="h-6 w-6"/>
                            )}
                        </button>
                    </div>

                </div>
           </div>
        </>
    </MuiModal>
}

export default Modal