import Head from 'next/head'
import Image from 'next/image'
import Linha from '../components/Linha'
import Tabuleiro from '../components/Tabuleiro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Tabuleiro>
            <Linha primeira={false}></Linha>
            <Linha primeira={true}></Linha>
            <Linha primeira={false}></Linha>
            <Linha primeira={true}></Linha>
            <Linha primeira={false}></Linha>
            <Linha primeira={true}></Linha>
            <Linha primeira={false}></Linha>
            <Linha primeira={true}></Linha>
     </Tabuleiro>
    </div>
  )
}
