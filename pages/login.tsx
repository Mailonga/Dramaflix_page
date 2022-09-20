import { async } from '@firebase/util'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import useAuth from '../Hooks/useAuth'

interface Inputs{
     email: string
     password: string
}

function Login() {

     const [login, setLogin] = useState(false)
     const { signIn, signUp } = useAuth()

     const { 
          register, 
          handleSubmit, 
          formState: { errors } 
     } = useForm<Inputs>();

     const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
          if(login){
              await signIn(email, password)
          }else{
               await signUp(email, password)
          }
     };

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

               <h1 className="absolute left-2 top-2 text-md md:left-10 md:top-6 text-red-600 font-bold 
               uppercase px-2 cursor-pointer object-contain md:text-3xl">Dramaflix</h1>

               <form
               onSubmit={handleSubmit(onSubmit)} 
               className='relative mt-24 rounded space-y-6 bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
                   <h1 className='text-4xl font-semibold text-center'>Entrar</h1>

                   <div className='space-y-2'>
                    <label className='inline-block w-full'>
                         <input 
                         type="email" 
                         placeholder="E-mail" 
                         className={`logpass ${
                              errors.email && 'border-b-2 border-red-700'
                            }`}
                         {...register('email', {required: true})}
                         />
                         {errors.email && (<p className="p-1 text-[13px] font-light  text-red-700">Digite o E-mail</p>)}
                    </label>
                    <label className='inline-block w-full'>
                         <input 
                         type="password" 
                         placeholder='Senha' 
                         className={`logpass ${
                              errors.password && 'border-b-2 border-red-700'
                            }`}
                         {...register('password', {required: true})}
                         />
                         {errors.password && (<p className="p-1 text-[13px] font-light  text-red-700">Senha Inválida</p>)}
                    </label>
                   </div>

                   <button 
                   className='w-full rounded bg-[#e50914] py-3 font-semibold'
                   onClick={() => setLogin(true)}>
                    Entrar
                   </button>

                   <div className='text-[gray]'>
                    Não é Assinante DramaFlix?{' '}
                    <button type="submit" className='text-white hover:underline hover:text-[#e50914]'
                    onClick={() => setLogin(false)}>
                         Assine Agora
                    </button>
                   </div>
               </form>
          </div>
     )
}

export default Login