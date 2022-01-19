import styles from "../styles/Home.module.css";
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Página principal</title>
        <meta name="keywords" content="Roupas, calçados, bonés"></meta>
        <meta name="Description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <h1>Welcome to my first page!</h1>
      <p>Here you start to learn about NextJs</p>
    </div>
  );
}
