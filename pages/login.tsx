import Head from 'next/head'
import Image from 'next/image'

function Login() {
     return (
          <div className='relative flex h-screen w-screen flex-col bg-black
          md:items-center md:justify-center md:bg-transparent'>
               
               <Head>
                    <title>Dramaflix</title>
               </Head>

               <Image
                    src="https://i0.wp.com/www.mexmads.com/wp-content/uploads/2021/03/series-stream.jpg?fit=1024%2C576&ssl=1"
                    layout="fill"
                    className="-z-10 !hidden opacity-60 sm:!inline"
                    objectFit="cover"
               />

               <h1 className="absolute left-2 top-2 text-xl md:left-10 md:top-6 text-red-600 font-bold 
               uppercase px-2 cursor-pointer object-contain md:text-3xl">Dramaflix</h1>

               <form className='relative mt-24 rounded space-y-6 bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
                   <h1>Sign In</h1>

                   <div className='space-y-2'>
                    <label>
                         <input type="email" placeholder="E-mail" className='logpass'/>
                    </label>
                    <label>
                         <input type="password" placeholder='Senha' className='logpass'/>
                    </label>
                   </div>
               </form>
          </div>
     )
}

export default Login