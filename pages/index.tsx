import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import Banner from '../components/Banner'
import requests from '../request/request'
import { Movie } from '../typing'
import Row from '../components/Row'
import useAuth from '../Hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { modalState } from '../Atoms/modalAtom'
import Modal from '../components/Modal'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({ netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {

  const {loading} = useAuth()
  const showModal = useRecoilValue(modalState)

  if (loading) return null

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title="Mais Populares" movies={trendingNow} />
          <Row title="Mais Classificados" movies={topRated} />
          <Row title="Ação" movies={actionMovies} />
          {/* My List */}
          <Row title="Comedias" movies={comedyMovies} />
          <Row title="Terror" movies={horrorMovies} />
          <Row title="Romance" movies={romanceMovies} />
          <Row title="Documentários" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
