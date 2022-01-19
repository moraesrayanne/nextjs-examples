import Head from "next/head";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <Image
          src="/images/aprendendo.png"
          width={350}
          height={350}
          alt="Garota trabalhanoo"
        />
        <div>
          <h1>Hello, my name is Rayanne Moraes</h1>
          <p>
            Sou estudante de análise e desenvolvimento de sistemas, estou no
            último ano.
          </p>
          <p>Atualmente sou estagiária em front end. bla bla bla</p>
          <p>lkasds akarlk awrj wprjp saj qrj asfjq wrl asçqwl r açl qwjrçl wral ss qwçrj</p>
          <p> aslç saljq raspoj qwrlmw rjow wrjslpf´gej</p>
        </div>
      </div>
    </>
  );
}
