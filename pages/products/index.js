import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Head from 'next/head'

export default function products() {
    return(
        <div className={styles.main}>
            <Head>
                <title>Products</title>
            </Head>
            <h1>Meus produtos</h1>
            <ul>
                <li>
                    <Link href="/products/pants/redpant"><a>Redpant</a></Link>
                </li>
                <li>
                    <Link href="/products/pants/bluepant"><a>Bluepant</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Voltar</a></Link>
                </li>
            </ul>
        </div>
    )
}