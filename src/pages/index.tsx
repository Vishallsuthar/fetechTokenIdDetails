import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



import GetDetails from '@/Components/GetDetails'
const Home = () =>{
  return(
    <div className=''>
        <GetDetails/>
    </div>
)

}
export default Home

