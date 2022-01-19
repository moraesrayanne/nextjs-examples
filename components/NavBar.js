import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Image src="/images/iu.png" width={50} height={50} alt="Icone de alguma coisa"/>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>PRODUCTS</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>POSTS</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
