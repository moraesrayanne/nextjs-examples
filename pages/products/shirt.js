import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function shirt() {
    return(
        <div className={styles.main}>
            <Head>
                <title>Shirt</title>
            </Head>
            <h1>Minhas camisas - R$19,99</h1>
        </div>
    )
}