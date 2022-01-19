import styles from "../styles/NotFound.module.css";
import Link from "next/link";
import Image from 'next/image'

export default function notFound() {
  return (
    <div className={styles.container}>
      <div className={styles.bodyPage}>
        <figure className={styles.image}>
            <Image src="/images/erro.png" width={150} height={150} alt="Erro 404 - Page Not Found" />
        </figure>
        <p>Página não encontrada!</p>

        <Link href={"/"}><a>Voltar para página inicial</a></Link>
      </div>
    </div>
  );
}
